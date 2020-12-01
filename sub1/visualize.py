import itertools
from collections import Counter
from parse import load_dataframes
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import analyze as an
import folium


def set_config():
    # 폰트, 그래프 색상 설정
    font_list = fm.findSystemFonts(fontpaths=None, fontext="ttf")
    if any(["notosanscjk" in font.lower() for font in font_list]):
        plt.rcParams["font.family"] = "Noto Sans CJK JP"
    else:
        if not any(["malgun" in font.lower() for font in font_list]):
            raise Exception(
                "Font missing, please install Noto Sans CJK or Malgun Gothic. If you're using ubuntu, try `sudo apt install fonts-noto-cjk`"
            )

        plt.rcParams["font.family"] = "Malgun Gothic"

    sns.set_palette(sns.color_palette("Spectral"))
    plt.rc("xtick", labelsize=6)


def show_store_categories_graph(dataframes, n=100):
    """
    Tutorial: 전체 음식점의 상위 `n`개 카테고리 분포를 그래프로 나타냅니다.
    """

    stores = dataframes["stores"]

    # 모든 카테고리를 1차원 리스트에 저장합니다
    categories = stores.category.apply(lambda c: c.split("|"))
    categories = itertools.chain.from_iterable(categories)

    # 카테고리가 없는 경우 / 상위 카테고리를 추출합니다
    categories = filter(lambda c: c != "", categories)
    categories_count = Counter(list(categories))
    best_categories = categories_count.most_common(n=n)
    df = pd.DataFrame(best_categories, columns=["category", "count"]).sort_values(
        by=["count"], ascending=False
    )

    # 그래프로 나타냅니다
    chart = sns.barplot(x="category", y="count", data=df)
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("음식점 카테고리 분포")
    plt.show()


def show_store_review_distribution_graph(dataframes):
    """
    Req. 1-3-1 전체 음식점의 리뷰 개수 분포를 그래프로 나타냅니다.
    """
    chart = sns.barplot(x="store_name", y="count",
                        data=an.get_most_reviewed_stores(dataframes))
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("음식점 리뷰 개수 분포")
    plt.show()


def show_store_average_ratings_graph(dataframes):
    """
    Req. 1-3-2 각 음식점의 평균 평점을 그래프로 나타냅니다.
    """
    chart = sns.barplot(x="store_name", y="score",
                        data=an.sort_stores_by_score(dataframes))
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("음식점 평균 평점")
    plt.show()


def show_user_review_distribution_graph(dataframes):
    """
    Req. 1-3-3 전체 유저의 리뷰 개수 분포를 그래프로 나타냅니다.
    """
    # count로 정렬이 안 되는 이유
    chart = sns.barplot(x="user", y="count",
                        data=an.get_most_active_users(dataframes))
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("유저 리뷰 개수 분포")
    plt.show()


def show_user_age_gender_distribution_graph(dataframes):
    """
    Req. 1-3-4 전체 유저의 성별/나이대 분포를 그래프로 나타냅니다.
    """
    users = dataframes["users"]
    # 성별로 그룹화하고 카운팅
    group = users.groupby(
        ["gender"]).size().sort_values(ascending=False).reset_index(name='count')

    chart = sns.barplot(x="gender", y="count",
                        data=group)
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("유저 성별 분포")
    plt.show()

    # age / 10 * 10으로 그룹화하고 카운팅
    age_range = users.age.apply(lambda c: int(c / 10) * 10)
    df = pd.DataFrame(age_range, columns=["age", "count"]).sort_values(
        by=["age"], ascending=False
    )
    group = df.groupby(
        ["age"]).size().sort_values(ascending=False).reset_index(name='count')

    chart = sns.barplot(x="age", y="count",
                        data=group)
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("유저 나이대 분포")
    plt.show()


def show_stores_distribution_graph(dataframes, n=20, min_reviews=30):
    """
    Req. 1-3-5 각 음식점의 위치 분포를 지도에 나타냅니다.
    """
    # score 높은 음식점
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    # groupby를 두 번 하지 않는 방법을 알아 보기
    stores_group = stores_reviews.loc[:, ['store', 'store_name',
                                          'latitude', 'longitude', 'score']]

    group = stores_group.groupby(["store", "store_name"]).filter(
        lambda x: len(x) >= min_reviews).groupby(["store", "store_name", 'latitude', 'longitude'])

    stores = group.mean().sort_values(
        by=['score'], ascending=False).head(n=n).reset_index()

    lat = []
    lon = []

    # 한 번에 데이터 형변환 하는 방법 알아보기
    for i, store in stores.iterrows():
        location_store = [store.latitude, store.longitude]
        lat.append(float(store.latitude))
        lon.append(float(store.longitude))

    loaction_list = {'lat': lat, 'lon': lon}
    loaction_list = pd.DataFrame(loaction_list)
    lat_avg = loaction_list['lat'].mean()
    lon_avg = loaction_list['lon'].mean()
    m = folium.Map([lat_avg, lon_avg], zoom_start=9)

    for i, store in stores.iterrows():
        location_store = [store.latitude, store.longitude]

        folium.Marker(
            location=location_store,
            tooltip=store.store_name,
            icon=folium.Icon(color='red', icon='info-sign')
        ).add_to(m)

    m.save('map.html')


def main():
    set_config()
    data = load_dataframes()
    show_store_categories_graph(data)
    show_store_review_distribution_graph(data)
    show_store_average_ratings_graph(data)
    show_user_review_distribution_graph(data)
    show_user_age_gender_distribution_graph(data)
    show_stores_distribution_graph(data)


if __name__ == "__main__":
    main()
