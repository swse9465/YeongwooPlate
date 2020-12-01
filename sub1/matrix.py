from parse import load_dataframes
import pandas as pd
import numpy as np
import sys


def matrix_stores_and_user(dataframes):
    """
    Req. 1-4-1 유저와 음식점을 축으로 하고 평점을 값으로 갖는 행렬을 만들어 저장합니다.
    """
    store_data = dataframes["stores"]
    review_data = dataframes["reviews"]

    store_data.drop(['branch', 'area', 'tel', 'address',
                     'latitude', 'longitude', 'category'], axis=1, inplace=True)
    review_data.drop(['content', 'reg_time'], axis=1, inplace=True)

    # store_data의 id와 review_data의 store를 조인
    user_store_data = pd.merge(
        store_data,  review_data,  left_on="id", right_on="store")

    user_store_rating = user_store_data.pivot_table(
        'score', index='user', columns='store_name')

    # 유저-음식점 행렬을 pandas sparse 행렬 데이터 타입으로 변환
    sdf = user_store_rating.astype(pd.SparseDtype("float", np.nan))

    # 파일로 저장하기
    sys.stdout = open('matrix_user_store_rating.txt', 'w')
    print(sdf.dtypes)


def matrix_user_and_menu(dataframes):
    """
    Req. 1-4-2 유저와 음식점 카테고리를 축으로 하고 평점 평균을 값으로 갖는 행렬을 만들어 저장합니다.
    """
    store_data = dataframes["stores"]
    review_data = dataframes["reviews"]

    store_data.drop(['branch', 'area', 'tel', 'address',
                     'latitude', 'longitude'], axis=1, inplace=True)
    review_data.drop(['content', 'reg_time'], axis=1, inplace=True)

    # category, user로 gruopby해서 mean() 적용하여 평점 구하기
    # store_data의 id와 review_data의 store를 조인
    user_store_data = pd.merge(
        store_data,  review_data,  left_on="id", right_on="store")

    user_category_scores = user_store_data.groupby(["category", "user"]).mean()

    user_category_rating = user_category_scores.pivot_table(
        'score', index='user', columns='category')

    # 유저-음식점 행렬을 pandas sparse 행렬 데이터 타입으로 변환
    sdf = user_category_rating.astype(pd.SparseDtype("float", np.nan))

    # 파일로 저장하기
    sys.stdout = open('matrix_user_category_rating.txt', 'w')
    print(sdf.dtypes)


def main():
    data = load_dataframes()

    matrix = matrix_stores_and_user(data)
    matrix_user_and_menu(data)


if __name__ == "__main__":
    main()
