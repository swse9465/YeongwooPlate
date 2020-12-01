import json
import pandas as pd
import os
import shutil
from datetime import datetime

DATA_DIR = "../data"
DATA_FILE = os.path.join(DATA_DIR, "data.json")
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")

store_columns = (
    "id",  # 음식점 고유번호
    "store_name",  # 음식점 이름
    "branch",  # 음식점 지점 여부
    "area",  # 음식점 위치
    "tel",  # 음식점 번호
    "address",  # 음식점 주소
    "latitude",  # 음식점 위도
    "longitude",  # 음식점 경도
    "category",  # 음식점 카테고리
)

review_columns = (
    "id",  # 리뷰 고유번호
    "store",  # 음식점 고유번호
    "user",  # 유저 고유번호
    "score",  # 평점
    "content",  # 리뷰 내용
    "reg_time",  # 리뷰 등록 시간
)

menu_columns = (
    "id",  # 메뉴 고유번호
    "store",  # 음식점 고유번호
    "menu_name",  # 메뉴 이름
    "price",  # 메뉴 가격
)

user_columns = (
    "id",  # 유저 고유번호
    "gender",  # 유저 성별
    "age",  # 유저 나이
)


def import_data(data_path=DATA_FILE):
    """
    Req. 1-1-1 음식점 데이터 파일을 읽어서 Pandas DataFrame 형태로 저장합니다
    """

    try:
        with open(data_path, encoding="utf-8") as f:
            data = json.loads(f.read())
    except FileNotFoundError as e:
        print(f"`{data_path}` 가 존재하지 않습니다.")
        exit(1)

    stores = []  # 음식점 테이블
    reviews = []  # 리뷰 테이블
    menus = []  # 메뉴 테이블
    users = []  # 유저 테이블
    menu_idx = 0  # 메뉴 아이디
    review_no = 1
    for d in data:

        categories = [c["category"] for c in d["category_list"]]
        stores.append(
            [
                d["id"],
                d["name"],
                d["branch"],
                d["area"],
                d["tel"],
                d["address"],
                d["latitude"],
                d["longitude"],
                "|".join(categories),
            ]
        )

        for review in d["review_list"]:
            r = review["review_info"]  # 2405가 마지막 번호
            u = review["writer_info"]  #

            reviews.append(
                [review_no, d["id"], u["id"], r["score"],
                    r["content"], r["reg_time"]]
            )
            review_no += 1

            # 나이에 옳지 않은 값이 있는 경우 0으로 처리
            age = datetime.today().year-int(u["born_year"])+1
            age = age if age >= 0 and age < 200 else 0
            users.append(
                [u["id"], u["gender"], age]
            )

        for menu in d["menu_list"]:
            menus.append(
                [menu_idx, d["id"], menu["menu"], menu["price"]]
            )
            menu_idx += 1

    userset = list(set([tuple(l) for l in users]))

    store_frame = pd.DataFrame(data=stores, columns=store_columns)
    review_frame = pd.DataFrame(data=reviews, columns=review_columns)
    menu_frame = pd.DataFrame(data=menus, columns=menu_columns)
    user_frame = pd.DataFrame(data=userset, columns=user_columns)

    return {"stores": store_frame, "reviews": review_frame, "menus": menu_frame, "users": user_frame}


def dump_dataframes(dataframes):
    pd.to_pickle(dataframes, DUMP_FILE)


def load_dataframes():
    return pd.read_pickle(DUMP_FILE)


def main():

    print("[*] Parsing data...")
    data = import_data()
    print("[+] Done")

    print("[*] Dumping data...")
    dump_dataframes(data)
    print("[+] Done\n")

    data = load_dataframes()

    term_w = shutil.get_terminal_size()[0] - 1
    separater = "-" * term_w

    # # print("[음식점]")
    # # print(f"{separater}\n")
    # # print(data["stores"].head())
    # # print(f"\n{separater}\n\n")

    # print("[리뷰]")
    # print(f"{separater}\n")
    # print(data["reviews"])
    # print(f"\n{separater}\n\n")
    # print(data["reviews"].id)
    # print(f"\n{separater}\n\n")

    # print("[메뉴]")
    # print(f"{separater}\n")
    # print(data["menus"].head(10000))
    # print(f"\n{separater}\n\n")

    # # print("[유저]")
    # # print(f"{separater}\n")
    # # print(data["users"].head())
    # # print(f"\n{separater}\n\n")


if __name__ == "__main__":
    main()