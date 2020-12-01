from parse import load_dataframes
import pandas as pd
import shutil
import numpy as np


def sort_stores_by_score(dataframes, n=20, min_reviews=0):
    """
    Req. 1-2-1 각 음식점의 평균 평점을 계산하여 높은 평점의 음식점 순으로 `n`개의 음식점을 정렬하여 리턴합니다
    Req. 1-2-2 리뷰 개수가 `min_reviews` 미만인 음식점은 제외합니다.
    """
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    print(stores_reviews[stores_reviews["store"]==277323])

    # store=dataframes["stores"]
    # store=store.rename({'id':'store'},axis='columns')
    # store_list = store['review_cnt'] >= 2
    # store = store[store_list]

    # min_reviews_list = stores_reviews['review_cnt'] >= min_reviews
    # stores_min_reviews = stores_reviews[min_reviews_list]

    # scores_group = stores_min_reviews.groupby(["store", "store_name"])
    # scores = scores_group.mean()

    # scores=scores.sort_values(by=['score'], axis=0, ascending=False)#평점순 정렬
    # scores.reset_index(level=['store'], inplace = True)
    # scores.reset_index(level=['store_name'], inplace = True)

    # score=scores[['store','score']]
    # print(score)
    # jmtcontents=pd.merge(
    #     store,score,on="store"
    # )


    # jmtcontents01=jmtcontents[jmtcontents['store'].isin([3191,5045,6592,53624,68470,139813,145963,237922,262143])]
    # jmtcontents01.to_csv('./stores_data/jmtcontents01.csv', index = False)


    jmtcontents01 = pd.read_csv('./stores_data/jmtcontents01.csv')
    print(jmtcontents01)
# 3191
# 5045
# 6592
# 53624
# 68470
# 139813
# 145963
# 237922
# 262143


    # print(store[store['store_name']=="재기돼지국밥"])
    # print(store[store['category']=="돼지국밥|따로국밥"])




    return 1


def get_most_reviewed_stores(dataframes, n=20):
    """
    Req. 1-2-3 가장 많은 리뷰를 받은 `n`개의 음식점을 정렬하여 리턴합니다
    """

    stores_reviews = pd.merge(dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store")
    group = stores_reviews.groupby(["store", "store_name"]).size().sort_values(ascending=False).reset_index(name='count')
    

    return group.head(n=n).reset_index()




def get_most_active_users(dataframes, n=20):
    """
    Req. 1-2-4 가장 많은 리뷰를 작성한 `n`명의 유저를 정렬하여 리턴합니다.
    """
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    group = stores_reviews.groupby(["user"]).size().sort_values(ascending=False).reset_index(name='count')
    return group.head(n=n).reset_index()


def main():
    data = load_dataframes()

    term_w = shutil.get_terminal_size()[0] - 1
    separater = "-" * term_w

    stores_most_scored = sort_stores_by_score(data)
    # stores_most_reviewed = get_most_reviewed_stores(data)
    # stores_most_reviewed_users = get_most_active_users(data)

    # print("[최고 평점 음식점]")
    # print(f"{separater}\n")
    # for i, store in stores_most_scored.iterrows():
    #     print(
    #         "{rank}위: {store}({score}점)".format(
    #             rank=i + 1, store=store.store_name, score=store.score
    #         )
    #     )
    # print(f"\n{separater}\n\n")

    # print("[가장 많은 리뷰를 받은 음식점]")
    # print(f"{separater}\n")
    # for i, store in stores_most_reviewed.iterrows():
    #     print(
    #         "{rank}위: {store}({review_cnt} 리뷰)".format(
    #             rank=i + 1, store=store.store_name, review_cnt=store['count']
    #         )
    #     )
    # print(f"\n{separater}\n\n")

    # print("[가장 많은 리뷰를 작성한 유저]")
    # print(f"{separater}\n")
    # for i, user in stores_most_reviewed_users.iterrows():
    #     print(
    #         "{rank}위: {id}({cnt} 리뷰)".format(
    #             rank=i + 1, id=user.user, cnt=user['count']
    #         )
    #     )
    # print(f"\n{separater}\n\n")


if __name__ == "__main__":
    main()
