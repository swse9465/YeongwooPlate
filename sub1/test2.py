from parse import load_dataframes
import pandas as pd
import shutil

import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# 추천 시스템 - 아이템 기반 협업 필터링(item based collaborative filtering)
# 아이템 기반 협업 필터링은 ~ 상품을 구매한 고객들은 다음 상품도 구매했다. 라는 뜻  ==>  ~음식점을 간 고객들은 이런 음식점도 갔다.
# 필터링 기반은 score를 기반으로 함
def algo(dataframes, n=20, min_reviews=0):
    
    # #기본적인 user-item 테이블 생성 방법
    # data =  dataframes["reviews"]
    # data = data.pivot_table('score', index = 'user', columns = 'store')
    # stores = dataframes["stores"]
    # stores.rename(columns = {'id': 'store'}, inplace = True)

    #store_name을 가져와서 merge
    rating = dataframes["reviews"]
    stores = dataframes["stores"]
    stores=stores.rename({'id':'store'},axis='columns')
    print(stores.shape)

    #리뷰가 없는 store 제외
    no_review_store = stores[stores["review_cnt"] <= 1].index
    stores=stores.drop(no_review_store)
    print(stores.shape)

    ratings_stores = pd.merge(rating, stores, on = 'store')

    #user-item 테이블 생성
    data = ratings_stores.pivot_table('score', index = 'user', columns = 'store_name').fillna(0)

    # cosine similarity를 구할 때 row 기반으로 유사도를 측정하기 때문에 row를 item으로 변경
    data = data.transpose()

    #item별로 유사도 측정
    store_sim = cosine_similarity(data, data)
    store_sim_df = pd.DataFrame(data = store_sim, index = data.index, columns = data.index)
    store_sim_df.to_csv('./stores_data/store_sim_df.csv', index = False) #음식점 유사도 데이터프레임 저장
    load_store_sim_df = pd.read_csv('./stores_data/store_sim_df.csv')


    #특정 음식점과 비교했을 때 유사한 음식점들을 추천
    print(load_store_sim_df["080부대찌개"].sort_values(ascending=False)[1:10])




def main():
    data = load_dataframes()
    algo(data)

if __name__ == "__main__":
    main()
