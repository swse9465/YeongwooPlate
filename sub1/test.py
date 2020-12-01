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


def algo(dataframes, n=20, min_reviews=0):
    
    # -------------------------------------------------------------------------------------------데이터 전처리
    # # stores데이터 프레임 전처리를 위해 id컬럼명을 store로 변경
    store=dataframes["stores"]
    store=store.rename({'id':'store'},axis='columns')

    #stores, reviews 데이터프레임을 합쳐 리뷰수 10개 이상의 상점의 평점을 계산
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    scores_group = stores_reviews.groupby(["store", "store_name"]).filter(
        lambda x: len(x) >= min_reviews).groupby(["store", "store_name"])
    scores = scores_group.mean().sort_values(by=['score'], ascending=False)
    scores = scores[['score']] #평점 계산

    
    #store테이블에 score컬럼을 추가 총 45700개의 음식점 추출
    data = pd.merge(store,scores,on="store")
    data['category']=data['category'].str.split('|').apply(lambda x : " ".join(x)) #category 컬럼의 벡터화를 위한 데이터 처리
    print(data)
    # -------------------------------------------------------------------------------------------review_cnt에 따른 score 불공정 이슈 해결 + weighted_score 생성
# r : 음식점 평점
# v : 리뷰수
# m : 리뷰수 상위 70%
# c : 전체 음식점에 대한 평균 평점

    m = data['review_cnt'].quantile(0.30) #상위 50%로 했을 때 16363개의 데이터가 들어옴
    data = data.copy().loc[data['review_cnt'] >= m]

    C = data['score'].mean() #3.851...

    def weighted_rating(x, m=m, C=C):
        v = x['review_cnt']
        R = x['score']
        return ( v / (v+m) * R ) + (m / (m + v) * C)

    data['weighted_score'] = data.apply(weighted_rating, axis = 1)


    # -------------------------------------------------------------------------------------------데이터 저장
    data.to_csv('./stores_data/stores.csv', index = False)

    # -------------------------------------------------------------------------------------------콘텐츠 기반 필터링 추천(Content based filtering)
    # -------------------------------------------------------------------------------------------카테고리 문자열을 숫자로 바꾸어 벡터화

    
    data = pd.read_csv('./stores_data/stores.csv')
  
    count_vector = CountVectorizer(ngram_range=(1, 3))
    c_vector_category = count_vector.fit_transform(data['category'].fillna(' '))

    # print(c_vector_category.shape)#(16363, 10480)

    # -------------------------------------------------------------------------------------------코사인 유사도(cosine similarity) 측정 사용
    #코사인 유사도를 구한 벡터를 미리 저장
    category_c_sim = cosine_similarity(c_vector_category, c_vector_category).argsort()[:, ::-1]
    # print(category_c_sim.shape)#(16363, 16363)

    
    def get_recommend_store_list(df, store_name, top=30):
        # 특정 영화와 비슷한 영화를 추천해야 하기 때문에 '특정 영화' 정보를 뽑아낸다.
        target_store_index = df[df['store_name'] == store_name].index.values
        
        #코사인 유사도 중 비슷한 코사인 유사도를 가진 정보를 뽑아낸다.
        sim_index = category_c_sim[target_store_index, :top].reshape(-1)
        #본인을 제외
        sim_index = sim_index[sim_index != target_store_index]

        #data frame으로 만들고 review_cnt로 정렬한 뒤 return
        result = df.iloc[sim_index].sort_values('weighted_score', ascending=False)[:10]
        return result

    # -------------------------------------------------------------------------------------------추천시스템 확인
    # jmtcontents05=get_recommend_store_list(data, store_name='080부대찌개')
    # jmtcontents05.to_csv('./stores_data/jmtcontents05.csv', index = False)
    # jmtcontents05 = pd.read_csv('./stores_data/jmtcontents05.csv')

    jmtcontents01=get_recommend_store_list(data, store_name='교촌치킨')
    jmtcontents01.to_csv('./stores_data/jmtcontents01.csv', index = False)
    jmtcontents01 = pd.read_csv('./stores_data/jmtcontents01.csv')

    print(jmtcontents01)
    # print("=========================================")
    # print(jmtcontents01)




    return data.head(n=n).reset_index()



def main():
    data = load_dataframes()
    algo(data)

if __name__ == "__main__":
    main()
