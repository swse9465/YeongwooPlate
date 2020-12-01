from parse import load_dataframes
from sklearn.decomposition import TruncatedSVD
from scipy.sparse.linalg import svds
import pandas as pd
import shutil

import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# 추천 시스템 - 아이템 기반 협업 필터링 행렬 분해(Matrix Factorization)
# 사용자에게 개인 추천을 해주기
def algo(dataframes, n=20, min_reviews=0):
    
    # 사용자-음식점 pivot table 생성
    df_ratings =  dataframes["reviews"]
    # print(df_ratings[df_ratings['user']<=500])
    df_stores = dataframes["stores"]
    df_stores.rename(columns = {'id': 'store'}, inplace = True)

    df_user_store_ratings = df_ratings.pivot(index = 'user', columns = 'store',values='score').fillna(0)

    # pivot table을  numpy matrix로 변환
    matrix = df_user_store_ratings.as_matrix()

    # 사용자의 평균 평점 
    user_ratings_mean = np.mean(matrix, axis = 1)

    # R_user_mean : 사용자-음식점에 대해 사용자 평균 평점을 뺀 것.
    matrix_user_mean = matrix - user_ratings_mean.reshape(-1, 1)

    #SVD를 이용해 행렬 분해(Matrix Factorization)
    #Scipy에서 제공해주는 Truncate SVD는 scipy.sparse.linalg.svds를 이용 ==>반환값 : U 행렬, Sigma 행렬, V 전치 행렬(Vt)
    U, sigma, Vt = svds(matrix_user_mean, k = 12)
    # sigma행렬은 0이 아닌 값만 1차원 행렬로 표현된 상태 ==> 0이 포함된 대칭행렬로 변환할 때는 numpy의 diag를 이용
    sigma = np.diag(sigma)

    # U, Sigma, Vt의 내적을 수행하여 원본 행렬 복구 ==> np.dot(np.dot(U, sigma), Vt)를 수행
    svd_user_predicted_ratings = np.dot(np.dot(U, sigma), Vt) + user_ratings_mean.reshape(-1, 1) #원본 행렬로 복원 + 사용자 평균 rating을 적용
    df_svd_preds = pd.DataFrame(svd_user_predicted_ratings, columns = df_user_store_ratings.columns)


    def recommend_movies(df_svd_preds, user, ori_stores_df, ori_ratings_df, num_recommendations=5):
        #현재는 index로 적용이 되어있으므로 user - 1을 해야함.
        user_row_number = user - 1 
        
        # pred_df에서 사용자 index에 따라 음식점 데이터 정렬 -> 음식점 평점이 높은 순으로 정렬 됌
        sorted_user_predictions = df_svd_preds.iloc[user_row_number].sort_values(ascending=False)
        
        # 원본 평점 데이터에서 user에 해당하는 데이터를 뽑아낸다. 
        user_data = ori_ratings_df[ori_ratings_df.user == user]
        
        # 위에서 뽑은 user_data와 원본 음식점 데이터를 합친다. 
        user_history = user_data.merge(ori_stores_df, on = 'store').sort_values(['score'], ascending=False)
        
        # 원본 음식점 데이터에서 사용자가 리뷰한 음식점 데이터를 제외한 데이터를 추출
        recommendations = ori_stores_df[~ori_stores_df['store'].isin(user_history['store'])]
        # 사용자의 음식점 평점이 높은 순으로 정렬된 데이터와 위 recommendations을 합친다. 
        recommendations = recommendations.merge( pd.DataFrame(sorted_user_predictions).reset_index(), on = 'store')
        # 컬럼 이름 바꾸고 정렬해서 return
        recommendations = recommendations.rename(columns = {user_row_number: 'Predictions'}).sort_values('Predictions', ascending = False).iloc[:num_recommendations, :]
                        
        return user_history, recommendations

    already_rated, predictions = recommend_movies(df_svd_preds, 166, df_stores, df_ratings, 8)

    # print(already_rated.head(10))#user가 이미 간 음식점
    print(predictions)#추천 음식점



def main():
    data = load_dataframes()
    algo(data)

if __name__ == "__main__":
    main()
