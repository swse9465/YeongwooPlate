# YEONGWOO PLATE

## 목차
- [프로젝트 소개](#프로젝트 소개)
- [기능](#기능)
- [기술 스택](#기술-스택)
- [시연 영상](#시연-영상)
- [테스트 방법](#테스트-방법)
- [팀원 소개](#팀원-소개)

## 프로젝트 소개
[![영우 플레이트 바로 가기](https://postfiles.pstatic.net/MjAyMDEwMDhfMjYx/MDAxNjAyMTIwOTE5MjMy.ep1JIySLVWHXusXCD2nJDP6eBZ5Qc6DD67p2LZmaYMog.0iaEGvZDoGvQs1bH8osrq8CpId7Q68HU94f_z_WeK00g.PNG.dbals75/YWP_LOGO.png?type=w966)](http://j3a301.p.ssafy.io/)

### 영우 플레이트

> 빅데이터를 컨텐츠 기반/협업 필터링 등을 이용하여 맛집 추천을 제공하는 사이트


### 유저 취향 추천
- 해당 유저가 다녀온 가게와 유사도가 높은 음식점 추천
- 아이템 기반 협업 필터링 행렬 분해를 통해 맛집 추천
- 사용자와 음식점의 정보를 이용하여 만든 데이터를 행렬 분해를 통해 유저가 갔던 음식점과 상관 관계가 높은 음식점을 추천

### 믿고 보는 맛집 리스트
- 테마별(치킨, 술, 육회) 맛집 추천
- 테마에 따라 DB 내의 음식점들 중 추천할 곳을 선정하여 업로드

### 음식 카테고리별 TOP 20 맛집 리스트
- TOP 20 맛집 리스트는 콘텐츠 기반 필터링을 사용하여 추천을 제공
- 가게 테이블의 카테고리 정보룰 사용하여 특정 음식점과 코사인 유사도를 비교하여 비슷한 음식점 추천

### 주변 맛집
- 현재 위치에서 가까운 맛집 8 개 추천
- 3km 내의 음식점 중 평점을 기반으로 산출


## 기능

## 기술 스택

### 공통
> VS Code, JIRA, GIT

### 프론트
> React, Nginx

### 백엔드
> Django, REST API, Node.js(AWS S3)

### DB
> Maria DB, Docker

## 시연 영상

[![SSAFY_3기_영우플레이트_UCC](http://img.youtube.com/vi/ulmYGtK3Cl4/0.jpg)](https://youtu.be/ulmYGtK3Cl4)

## 테스트 방법

**DB**

```bash
# Docker 접속 후 vi /etc/mysql/my.cnf 에서 아래 구문 추가
[client]
default-character-set = utf8mb4 #

[mysql]
default-character-set = utf8mb4 #

[mysqld]
collation-server = utf8_unicode_ci
init-connect='SET NAMES utf8' #
character-set-server = utf8
max_allowed_packet = 1000M  # 패킷 최대 전송 가능크기 1GB로 설정 
```

**Backend**

```sh
cd sub2/backend
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py initialize
python manage.py runserver
```

**Frontend**

```sh
cd sub2/frontend
npm install
npm run serve
```

## 팀원 소개
* 팀원:
  * **오유민** [ @dbals75 ]
  * **최연욱** [ @dusdnr2694 ]
  * **김태상** [ @xotkd0709 ]
  * **서영우** [ @swse9465 ]
  * **한지혜** [ @hangji0124 ]