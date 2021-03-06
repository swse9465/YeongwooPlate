# readmExample

> 리드미 양식입니다. 꼭 따라야 할 필요는 없지만 뭘 넣을 지 고민된다면 참고해주세요

## 목차
- [개요](#개요)
- [기능](#기능)
- [유사 서비스](#유사-서비스) 
- [향후 전망](#향후-전망)
- [기술 스택](#기술-스택)
- [기술 설명](#기술-설명)
	- [ERD](#erd)
	- [디렉토리 구조도](#디렉토리-구조도)
	- [기타](#기타)
- [테스트 방법](#테스트-방법)

## 개요
> 프로젝트를 간략하게 설명해주세요  
> 프로젝트를 개발하게 된 동기도 들어가 있으면 좋습니다.

## 기능
> 프로젝트의 기능들을 설명해주세요  
> 스크린샷이나 gif등으로 한눈에 볼 수 있게 하면 더 좋습니다

## 유사 서비스
> 프로젝트와 유사한 서비스들이 있다면 소개해 주고 여러분의 프로젝트 만의 차이점을 기술해주세요

## 향후 전망
> 부득이한 사정으로 프로젝트에 구현하지는 못했지만 보완할 점이나 추가할 점이 있다면 적어주세요

## 기술 스택
> 프로젝트를 구현 할 때 사용한 기술들을 적어주세요

## 기술 설명

### ERD
> DB 및 백엔드를 구현할 때 ERD를 그려보고 리드미에 남겨주세요
### web_user
- user_no : 고유 번호
- user_type : kakao, naver, google
- user_token : 유저 토큰
- user_nickname : 로그인API에서 반환받은 닉네임
- user_age : 유저 나이
- user_gender : 유저 성별
- user_profile : 유저 프로필

### web_review
- review_no : 리뷰 고유번호
- user_no : 유저 고유번호
- review_storeid : 음식점 아이디
- review_content : 리뷰 내용
- review_score : 점수
- review_like : 리뷰 좋아요

### review_photo
- photo_no : 사진 고유 번호
- user_no : 유전 고유 번호
- photo_name : 사진 이름

### wishlist
- wishlist_no : 위시리스트 고유번호
- user_no : 유저 고유번호
- store_id : 음식점 아이디

### jmtcontent
- content_no : 컨텐츠 고유번호 
- content_name : 컨텐츠 이름
- jmtcontent_photo : 썸네일 사진

### jmtcontentlist
- jmtcontentlist_no : 컨텐츠리스트 고유번호
- content_no : 컨텐츠 고유번호 
- store_id : 음식점 아이디



### 디렉토리 구조도
> 폴더 구조가 어떻게 되는지 폴더, 파일별 역할들을 간략하게 적어주세요  
> 너무 자세히 적을 필요는 없습니다

### 기타
> 이외에도 프로젝트를 이해하기 위해 필요한 것들을 적어주세요 (팀별 개발표준, API Documentation 등등...)

## 테스트 방법
> 프로젝트를 배포한 url과 테스트하기 위한 계정 ID/PW를 적어주세요