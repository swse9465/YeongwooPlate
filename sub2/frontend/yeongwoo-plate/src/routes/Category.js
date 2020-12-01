import React, {Component } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import styled from "styled-components";
import JMTContentListCard1 from "../components/JMTContentListCard1";
import JMTContentListCard2 from "../components/JMTContentListCard2";


const Wrapper = styled.div`
  text-align: center;
  margin: 1%;
  margin-left:160px;
  margin-top:-50px;
`;
const Headerdiv = styled.div`
  text-align: center;
  margin-top: 0px;
  height: 150px;
  margin-left:-500px;
  margin-bottom:25px;
  background-color:#e6e6e6;
  width:1915px;
  padding:40px;
`;
const ContentNameH2 = styled.h2`
  font-size:30px; 
  font-weight:bold; 
  margin-top:20px;
 
`;
const ContentNameMentH2 = styled.h2`
  font-size:20px;   
  color:#808080;
  margin-top:20px;
`;

class Category extends Component {
  // Categori = (params) => {////////////////////////////////////////
  //   this.props.dispatch(fetchDataStarted(params));
  // };
  constructor(props) {
    super(props);
    this.state = {
      // paramslist:this.props.dispatch(fetchDataStarted()),
      contentNO:props.match.params.contentNO,
      contentName:"Top20 파스타 맛집",
      contentNO01: [
        {
          storeNO:"262226",
          storeName:"아웃백",
          address:"서울특별시 영등포구 여의도동 34-12",
          storeScore:"4.8",
          userNickname:"413808",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"올때마다 음식도맛있고 직원분들도너무친절하셔서너무좋아요 먼저 음료물어봐주시고그릇도치워주시고 더편하게먹을 수있도록 해주신게 가장맘에들어서 자주방문해요ㅎ^^",
          wish :"false",
          url:"https://lh5.googleusercontent.com/p/AF1QipOZojZb0AujT6n_--aahTkRl1stC4lDBpq9knhj=w408-h306-k-no"
        },
        {
          storeNO:"278381",
          storeName:"엘리 (Ellie)",
          address:"서울특별시 송파구 송파동 8",
          storeScore:"4.6",
          userNickname:"947622",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"블랙톤의 식당 인테리어가 식욕을 돋구며 그만큼 음식도 만족스러웠음. 종업원들도 메뉴에 대한 이해가 깊으며 친절한 설명을 들으며 느긋한 식사를 할 수 있었음",
          wish :"false",
          url:"https://lh5.googleusercontent.com/p/AF1QipPCmlMYVjsBpQyVDcloA_UX0p7kk6TtWiGPaRLs=w408-h306-k-no"
        },
        {
          storeNO:"71533",
          storeName:"누메로도스",
          address:"서울특별시 성동구 성수동1가 656-1021",
          storeScore:"4.5",
          userNickname:"128271",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"분위기 있는곳에서 맛있게 잘 막었습니다 메뉴들이 다 맛있네요",
          wish :"false",
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6eQVwxb5RuQS8AMWytEAwrSQ75HYAVghgTA&usqp=CAU"
        },
        {
          storeNO:"277590",
          storeName:"에픽 (Epic)",
          address:"인천광역시 부평구 부평동 341-30",
          storeScore:"4.4",
          userNickname:"856612",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"마레끄레마 강추메뉴예요. 리조또랑크림파스타 같이먹을수있어요. 저렴하진않지만 가격대비 괜찮아요. 분위기도 좋구요. 네이버에 디오니 에픽 치시면 제가 쓴 후기 보실 수 있으세요",
          wish :"false",
          url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjVfMzYg%2FMDAxNTk4MzI1NTk5NjEz.Tf38uYQO8HPWmki_do2BgI2nXMn6guFBeTAMDAMgfN0g.YQ6xHKrKjrbJIAWvn8evEBXzUsP_p6EMdZbPHYG_jZQg.JPEG.shrkfla2002%2FIMG_9384.jpg"
        },
        {
          storeNO:"117728",
          storeName:"라구식당",
          address:"서울특별시 서대문구 창천동 2-42",
          storeScore:"4.2",
          userNickname:"687969",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"신촌에서 파스타나 라자냐가 먹고 싶을 때 그냥 가면 됩니다. 고민하지 마시고 그냥 가세요. 맛이야 사람에 따라 갈릴 수는 있다고 해도 좋은 식당인 것은 분명합니다.",
          wish :"false",
          url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEyMjRfMTA0%2FMDAxNTQ1NjIyMjIyNzQ5.YgSU2LrYpV7SUBrMK20km7u4xXdv5mJDXg1oaFA8qxwg.YPZl0hwV5vLA0RMxcB14GrZMCK72wK7R1vnVRzJaB38g.JPEG.nanukihj%2FIMG_1320.JPG&type=sc960_832"
        },
        {
            astoreNO:"22746",
            storeName:"겁없는토끼부엌",
            address:"서울특별시 서초구 방배동 474-19 1층",
            storeScore:"4.1",
            userNickname:"43793",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"양이 혜자고 맛도 괜춘해서 항상 웨이팅 쩌는 집ㅜㅠㅠㅠ 내부가 작은  편이고 테이블 간 간격도 좁은 편임. 갈때 네이버 예약 꼭 하고 가야 됨",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMThfNzQg%2FMDAxNTg0NTE2MzI3NjAz.WM01wwzgZY26dDbZoXUXJ0nt7aGPSLkJheIORoXkKWAg.vI6DZuZfnJS77HnIjwtP6d9a_wsY-dJvvKeQ4HDDpoMg.JPEG.arum1113%2FIMG_0446.jpg&type=sc960_832"
        },
        {
          storeNO:"198999",
          storeName:"빈체로",
          address:"경기도 안산시 단원구 고잔동 530-2",
          storeScore:"4.0",
          userNickname:"222108",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"진짜 무난한집 맛도있고 가격도 뭐 다 두루두루 괜찮은 집",
          wish :"false",
          url:"https://lh3.googleusercontent.com/proxy/p8Li2-ipO3nKFZ710x8FuKS6U4phgatoO2uv7byG7LyIlTwt_EIC8HH3_z16UAEYif5zXgqrpgf1S0K-SFpVTl41NuUiTMOuwqSQ0QZ2UfeeTe3ds69AGaEVGn939kXmr_3ghXYca1qTZ9p4x-EMV2NxznzUTcTEm1g"
        },
        {
          storeNO:"282018",
          storeName:"열두달",
          address:"서울특별시 종로구 익선동 166-54",
          storeScore:"4.0",
          userNickname:"448633",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"올리오오일 파스타 진짜 맛있습니다👍👍",
          wish :"false",
          url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEwMTdfMjk2%2FMDAxNTcxMzE2MzM2NzM0.h-YAImYM1KI7iB50UqHk9r2nqigShU6GIkk-F4W0pGsg.f3M-KDjaY5-Gb9Ht1QhCPLdvlIaxbhXuIidhcqyhw00g.PNG.eungun_life%2F%25C7%25BB%25C0%25FC_%25C0%25CC%25C5%25BB%25B8%25AE%25BE%25C8_%25B7%25B9%25BD%25BA%25C5%25E4%25B6%25FB_%25C0%25CD%25BC%25B1%25B5%25BF_%25B8%25C0%25C1%25FD%252C_%25BF%25AD%25B5%25CE%25B4%25DE_%25B8%25DE%25C0%25CE.png&type=sc960_832"
        },
        {
          storeNO:"154876",
          storeName:"문화식당",
          address:"서울시 성북구 동선동2가 150 지하1층",
          storeScore:"4.0",
          userNickname:"745537",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:" 퓨전의 좋은 예",
          wish :"false",
          url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMDA0MDlfNjQg%2FMDAxNTg2NDE1MDc3NjM5.LXmF6AZLIu6sz1h-azSH9rjACb6mBwPyKR0r-9mIwYIg.PIrcMHpuT-7Z12RwUrt3WIgNXDANn2ZjqssZue9Csikg.JPEG%2FI2BsaFSJ3VhHG5GJPq8SRyxXIKxE.jpg&type=sc960_832"
        },
        {
            storeNO:"154117",
            storeName:"문",
            address:"서울특별시 마포구 연남동 385-12",
            storeScore:"3.9",
            userNickname:"315118",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"생각보다 골목안에 있고 아담한 곳이었어요. 페퍼크림파스타가 꾸덕하고 약간의 매콤함이 느끼함을 잡아줘서 정말 맛있었어요.",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160429_283%2Fpolo1510_1461869288481PlNt9_JPEG%2FDSC01352.JPG&type=sc960_832"
          },
          {
            storeNO:"96270",
            storeName:"도우룸 바이 스와니예",
            address:"서울특별시 서초구 방배동 797-20 2층",
            storeScore:"3.9",
            userNickname:"614975",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"분위기 좋구요 음식 고급스럽습니다 파스타 질감이 좋고 소스가 진합니다 그래서 간혹 짜게 느끼는 분도 있을 듯 합니다만 맛을 음미하며 천천히 일행과 대화하며 식사하기에는 괜찮습니다 ...",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEwMjVfMTk1%2FMDAxNTcxOTYwMjg4MDg2.YdnZJ7MzRErcXP9FpxXM7_xwzh_kEusf-qrEvV2C9l0g.2gOsyDahCUt3DOnedSgwCU7e1dibyNUoVItN2mQAfO0g.JPEG.jijiyoyo%2FIMG_0105.jpg&type=sc960_832"
          },
          {
            storeNO:"271833",
            storeName:"어글리스토브",
            address:"서울특별시 강남구 역삼동 817-36",
            storeScore:"3.9",
            userNickname:"243883",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"서가앤쿡풍의 한 접시 메뉴 그쪽이 쌀이라면 여긴 빵이다. 가격대비 훌륭하다.",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEwMTVfNzkg%2FMDAxNTcxMTM0MTIwMzg4.SQKVUiPTCZVZ2k-ogrnrAZf6zPfmMl1SnV_RiIXtM2Qg.3VvXpfK_WF1X8cofBloletPCfd1jEBmBA1jfLFpblk8g.JPEG.4minotsave%2F1571134119665.jpg&type=sc960_832"
          },
          {
            storeNO:"61230",
            storeName:"나인로드 피제리아",
            address:"서울특별시 서초구 서초동 1316-30",
            storeScore:"3.8",
            userNickname:"855589",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"20대 초 중반의 친구들이서 가볍게 수제 맥주와 안주로 수다떨기 좋은 집.",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA4MjFfMzAg%2FMDAxNTAzMjgzNjQ0NjQy.WC6GIrhE7cia3mUMv8C8nK2Cmx1ZEbr-h1R_qfRkE-0g.nyYpGm8y3GXfSRlUmWK_w1IeQn9Ygyov29SbQFqZf5Mg.JPEG.ykient%2FIMG_9288.JPG&type=sc960_832"
          },
          {
            storeNO:"160799",
            storeName:"미즈컨테이너",
            address:"서울특별시 서초구 서초동 1316-29 타임빌딩 1층",
            storeScore:"3.8",
            userNickname:"148712",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"직원분들이 매우 친절했어요 셀러드파스타 양이 정말많아요 질려요  떠먹는피자는 항상최고❤️ 바베큐플레이트는 그냥쏘쏘",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160208_245%2Fjrgift_1454933184894sKarp_JPEG%2FDSC_7131.JPG&type=sc960_832"
          },
          {
            storeNO:"165924",
            storeName:"바비레드",
            address:"서울특별시 마포구 상수동 312-8",
            storeScore:"3.8",
            userNickname:"311334",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"특이한 형태의 퓨전 요리점 매운 맛을 좋아한다면 깔끔한 한식 퓨전을 원한다면 가보기를 추천 분위기도 깔끔하고 날씨 좋은 날은 창가나 야외 테라스에서 식사하길",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjEyMjhfMjg3%2FMDAxNDgyOTM2MDk1OTk1.FJoBu1Vg1rMVBtkyoyed25eNcLBl41_QDDN6WNpE44og.VClPiyQL1FouZYLVnGNUhcD_JhlAmshlflFHfehbDwMg.JPEG.etchstone%2FKakaoTalk_20161228_233821809.jpg&type=sc960_832"
          },
          {
            storeNO:"321473",
            storeName:"을지로미팅룸",
            address:"서울특별시 중구 초동 110",
            storeScore:"3.8",
            userNickname:"178745",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"매장의 앤틱한 인테리어도 너무 좋았구 음식도 너무 맛있었어요! 특히 구름파스타는 꾸덕꾸덕하면서도 매콤해서 자꾸자꾸 생각나는 맛! 매장 분위기도 서비스도 좋아서 더욱 기억에 남았어요...",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTRfMTA1%2FMDAxNTk0NjUzMzM1MTE4.B0j01zRcVu9UG7lQVU5Ob5Lf_s3ZOQNlnNNHaiBgftwg.5sLTIArtLPYj3_IxcodfOvQv7Lzm4Rduvu3XJYHU9rQg.JPEG.saekomi_%2FKakaoTalk_20200713_110910361_04.jpg&type=sc960_832"
          },
          {
            storeNO:"165925",
            storeName:"바비레드",
            address:"서울특별시 강남구 역삼동 618-18 지하 1층",
            storeScore:"3.7",
            userNickname:"122394",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"생각보다 양이 적어보이지만 딱 기분좋게 배부름",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130923_104%2Fzaptonbird_13799174981206AOKv_JPEG%2F%25BF%25AA%25BB%25EF%25B5%25BF_%25B8%25C0%25C1%25FD_%25B9%25D9%25BA%25F1%25B7%25B9%25B5%25E517.JPG&type=sc960_832"
          },
          {
            storeNO:"17251",
            storeName:"감칠",
            address:"서울특별시 마포구 연남동 385-6",
            storeScore:"3.6",
            userNickname:"926948",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"고추장삼겹살크림파스타랑 불고기볶음밥먹었는데 맛있고 양도많았어용 분위기도좋았습니다! 그런데 간판이작아서 가게가 찾기힘들수있을거같아욧",
            wish :"false",
            url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRUXFRgXFxYVFxcXGBgXFxcWFxUYFRcYHSggGBonGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0iHyYvLS01LS0tLS01LS0tLS0vLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAABAwIEAwYDBAcGBgMAAAABAAIRAyEEEjFBBVFhBhMicYGRMqGxQsHR8AcUUmJygpIjQ6KywuEVFjNT0vE0Y8P/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMhEAAgIBBAECBAQFBQEAAAAAAQIAAxEEEiExQQVREyJhcRQysfAVIzNSkUKBwdHxof/aAAwDAQACEQMRAD8Apgw8ktojZJynmgWrzU9rDIM9EaRlKIrp0N1QpQceaaA6JYHT5KcCdDzIx5pvKEYIUYnYiyUlILx+ZRGoFOJOIuEzWpueWsbq4ho8yYH1S+8Cl9nYdjKA/wDsB9pP3Ila5YSlh2oTOr4TDtpU2U2iGsaGgdAISkqomi6Lr0KEKs8Y+WaOwjdiYEBVmK4oxphzgDGmpj7lR4/tTksykXdS6B7AFCZncZUce8uoVTgnmaDi9Vwonu2nMSG5hECenOPZHg2inTa2fhHz1P113ud1T8JrPcX1KmhADG5pEG5cRzkD2CsG12NP9o7KD9dh7oW7DAGXx8uY1RAxFU0tQLuH7TtQ09BYn0CtKdPxHkPqofCcEKLTBl7jJO+th+dyVZsbARweSxg8eIoFYPtzgsldtUaVG3/ibY/ItW3m6zv6QKc0GO5VQPQtd+ASmrUNWY7oWK3D68TGtKcAUag7aVIBPNYLCekjgQI6JN0sFUkRDmkpQSwUqfJRmTGygClE9ELcl06ElSUBCOAonQkSVlCJROleAgZTQqI+8TWDJiiCkJXeIu8UjM6FlRZCjNRAPXcyYWQpJYVJpUHu+Gm938LSfopA4TiDpQqf0wrAE+JBdR2RKtzTukK0q8JxA1oVf6SfooVak5tnNLf4gR9VbkdyVdT0ZHKe4HiAzFUXE2FVvsTB+qYxD8olU9XHAkwY/OyPUpPIkWgFSD5noKqqriFUk5QYIaXdYbrHW/5hK4FxMYnDU6w1c3xdHizx7grPdsadXwupzIkEDVzXDK5o6xMdYWm5yuJ5LbtY58SuoceoDEQWhzfEJdfUW8yOavMHXwoqFtaHM2c3roVhKfDKdX+0ZUJdMmwmeo2TtfAuYJqVyb2EeI8g0fJR8M8c8SN03wrsfVFJjwwFpyOI1iIt73VMyjVbi6dOtJh+YT0aT9yrOH405hmA8QtaS2m27ntJMNG0nWD5racLJqtY91wB4CbuE7E+SGr7WMuybgJaUW77pwvSC5ILlb4mZ22KJVB+kGoBhmNP2qo+TXn8FesuViP0i4/NWZRbcU2y7+J8GPRob/Uh2t/LMa0VZa9fpzM7QIlS2kKuoEqSHFZDrzPSbZJslADqo4eU41yGVnbY+D1KPN1Tef8ANkTnKmJGIHv6pAqHoku80qjSLjDRmJ2AJPyVwstgAcx+nUPROl3RN4nh1Wl8dNzZ3IKbbUVXrIPIlAVblTmP5+hQTWYoKu2TiV2VEpMdERamN0rmMe3snMLhX1HZabXOdyaNPM6Aeav+CdmnVofUllP/ABO8uQ6ra4PBMpNy02ho6b9SdymaqC/J4EQ1GuWvheTMpw/sYTBrVI/dZHzcR9B6rQ4PgdCn8NJs83DMfcqyCUnFpVehMqzVW2dmIDUeRLSgUYLAFo3kSX0QRBAI5G6lNAQyq3w5G+ZjivZHC12kOp5CftU/AfOBY+oWD4x+jStTJdQeKzf2TDan/i75eS7CWJtzFXZjqHTVOCMnP3nJf0f8bOErOw9eW06jr5hHd1NASDoDYHyB5ro/E8GHtIIlR+0XZmhi2xUbDohtRtnt9dx0NlnMDxqtw5zcNxCX0D4aOLaCQBsyqNRHqR1AkcAcYMtc62HeowfIkbH9nWgue1su5EkXO5II9/qqxvDSDmgaHKDIDo1e8mS2l6yfWF0l+HbUaHscHNIkOaQWkcwRYqtxPCWuMubImSBo6NM3MDkhtvHEENp5md4DwU1TmcT3RIL3EQ6sRoI+zSGzd4C3DDAgAAbAWso1J8WAhO5yUPaTLZEdlCUljCmeKcTo4Vmes6D9lggveeTR9+gRVWQAWOB3F8T4gzDUXVn7Wa3dzjo0fnQFcqxFZ1R7nvMuc4ucepP0T/GuMVMXUzv8LG2YwGzR97juUzRoylNRaDwOhN/RaX4K5b8x/eI7Qp2ToYjDOqcZTJ0BPkJ+iQJzHuBENppRapTcM/djv6T+Cbe2NbKhJldwMjFyQ98XJTxZdU/FqxLhTZckgADckwB7lFrXecCcWAGZL4bh6uLq91SENHxO2A+82Nuh2BK6LwTBU6IcykfhMF+rnOiTf119oFlD4Jgm4WiykwAucMz3c53/AJiJ8g0bKTw2jlc5oM3mepRrbVRhVWOfJmFqL2uzz8vtLihUznuneIG5Dr203UPtF2b74NNOGuYCI0Dhy6f7qwwOBDXZ8xJiFL/WATa60KVU1bbxM9bHR91R6nLa2Fexxa5jgQYIgol1Uuadh7IIP8Or/vmj/Fn/ALJxvMtR2Y4DnAq1R4dWMP2v3ndOQ3+sHsvwjv35nj+zZr+87Zvlz/3XQAEHTUBvmaE12q2/y078wAIEoFMVqsLQ6mR3FvqKJiOINZqVWYziUnKzWCZ8uSpcS1zrh0GZkifr1Wbfrwp2p/maOn0Jbl+BLv8A49rYdL7dUf8Ax1+wHzKxbcRToZm1KklzswJ+JpOzYvG/K6scPjWOAy1GmRsdUm9+oHIY4j66Sj2mjPaVzAXODYGuqsMN2hafibHksc4X+J0GxIIhvWDtdFU7xvwuB6kW+UKU1WoH5XzBvo6CeRidGoYtj9D6J4tXOOFcRqOLszcoEQ4E3+X3rV8N4z9l/wDV+K0KPUhu2XDB9/EQv9PZBur5EunDZQeJcOp16bqVVgexwgtPyI5EG4OysAQdETmrTxM8GcN4tRxvBa8UKru4eSWZvEx3NtRmgeOYiRfmBc8N/SzaMRhZO7qLon+R+n9S6J2g4NTxVB9GoLOFju1w+FzeoP4bri//ACVie9dRGUva7KZJaDyIMGxkH1VXsCj5oxVULMzf0v0lcPIkiu3oaYP+UlFW/SXgh8FOu/8Ala0e7nfcsM7sVjGPyd2C7eHDLYSYceQISmcAeJDso8jP0QH1NY9poU+no/by+4j+keu8RQpsoj9o/wBo/wBJAaD6FZp1V9RxfUe57jq5xLifUp6phKdPr5/gtl2a7FGpFXEgtbq2lo4jbvDq0fu6840Qd7W8LHz8DSLnr9TKDg/C6lcxSZmA1OjR5uNvTVbThvYtog1Xkn9llh/Ubn5LWYbCtY0NY0NaBAAEAeQCkNYipo17bmZV/qdjcLwJV4XgdBnw0mTzIzH3MlT20YUwUOZA8/wSsjOZ9k0tKjoTOa5mPJzIndpFTCtdZzQR1AP1VhlZzPsjFJp0cFY1jyJUOZm8V2aw7/7sNPNnh+Qt8llKvYCpTxDK1OoHsaS7K8Q8ENOWCLO8WXkumuw58/JMliCdOmcgRhdXaBjPE59xPGVKdZ7GsknLl2IHwgR6T6q/4RhcjJdrqTzJ1VzisEx8Zmgxodx5FUXHH1aDc0B1Ft3kfFA0t0+aQOmFLmw8y3xd67RC4hiqjG5SQcx+IWP8Kj4jFup0jUJNgovEMYK4ZkmBBmI1FrHzTraDqrC11/CY9kha4fUYBJHQl1BCcx3AYqo+m13eE5hPvyQTXC+FuZSYxzbgXv1KCnDe5nS64ZghSptpjYXPM6k+6lkIBE8rbCgDAizMScmNVXwqDiOLLjlHqVN4ticrfoqRxhs7rL9R1JX+WvZmjoaA3zmQsZXyOLgPDa/IR91/dUvHOOTSD2nUxlaD1uTHT3VnXfIJOkGxUbA8JDqNOkCAHP75/NzQPCBy/uwT5pXS1Ixy3iOatioAI4PnzMRFWs6zKlQjcaDeDsNVtOG9m291TdUlr4k9DsOVhyVnj+HYqo6iaAZTph4NVtgSAQTlJ2InYH6KVxbhVR4BZVywCMt4dIi7hcLUc5UYEz632tw2JSDDhjozBzdLaj0QrU2VIbndlF4DiB5eSIdlwHMcAJaBmph7mgFoiWx9k6kHeeaaqRDqdSk6gSCA8EOBHNpFja6UNPO5THhcDgdyfwXGNLTIPdtcQCIyhug8vuV6zDgiabid4P3LL9ncLVogh9RtSmSMjxvtBP09bq2pYnu3tDDaxc3YTyQLaVDEYzCCwvyOP35mo4NxCCGO026FaCLLE4p4FSx1AJ6XifktXwbE52DNr8J/PsnfTr2DGh/HUzddSMC1fMkOYqjiFIU6jK+UGIa6dIPwuPkTHqrs2kfmQo2LoB7HNP2gR77rUtr3oREa32tmQ8bVpSamZxe4EXPgbMA5GxYmBfouecZLc5M3/OqXW4o9rS1xhwlp11aYIF5sQpPYzhxxNTvXiadM+jn6gdQBc+ixAj2vNpNunUkmWfY/suARiKzZdrTYfs8nkftcuXnptmtS6DRN9NfPonbfEbDl+C26qggwJj33tY25oTKe50Rmryt9fdN1KkomEQSTYJrCoMtFSSxwIoJYYeSabiAbBLbJ3QjqR/pEsKD/AKjF5DyREdEgiN0ptaNVH4k+RJNHsYtryNCnA8HVM9807hKc2EQOj/SUKssW+mmKlIEEEAg2IN5HVPMqJxzNwqMuJcNMdxHgopHPTszl+wenT6J7Ds0+5aV7ARBuFz3t7xHE4d9LDYalH6wcjKuwcTBbAFiAZnlzgrLbQBbN6dGNLbkYMm4ztXhaT3U3VPE0wYvdBX3B+zFCjRp0yxry1vie4Auc43c4nmSSfVEjfhzK/FWP5fDPVNu0J5fenq3wt9T8/wDZRazvCQjCUmY4/jGsMuMAfM+SpMLWqVqjanw0wfCDEuJ3PQK6xPCm4ip4iRlNwIOYcj6gaJNWi1hy/vQJ6TIHVectdXuJHJJx9h1NqobUA9hKejgu9LySQxpgk/ID0UrF1e5DqjRJyFrRsY0BPmAhgMTUk0Q1jILrtGp2Jn8lQOOcOr1BSLHmGVWuLb3vfT6QnkRVxiLaq2x/tJH/AByo3Dd+/D1TLsga4hpEgkVI1iYCkcJ4n3lNjspbMhzTeHR9nmLkz8uWX7T46uKmSsb2IE+BodqYBvAm+to3Vhw7jFAUy01LMtInxEzLhIuSdtpRDuCjAia217Tk8yczD1mOJNYvj4AQM4ubPy2OmoA3RY3FBr+7q0y5jiPE2zmkiZLeYvcbDdYTi1WvSrZy6tABFN9TMCJvAduZHrC2uJwud1Co9/jqQ3I2XSXiWkW3BnoEX4RUZHOZSq4bsKIdRjKIcym50kxDgC0zBDvnqEXZyi4vLqjw4C4263G0JWLeHHJTaXln9mT9kwbOHkZCo+KcJrucwl7Q2Tna3MwEEib32n3S2R8TnAE2H3/DyoyT37y7r8bpvrF7HCPha7ZwbrrYjUradmMVMj3B2dv6aLK901kMbTGVsATsYsRPnqr7s9Ifrz090FLh+JVsYOcS19Q/DkTZ1tQeYB+4pshKnwt9US9EJ5+ce7b0nDHVKbRJc5paANTUAgeeYldP4BwtuHoMpNjwjxEbuN3H1MrP4vhfecZY8jw08M2of489RjJ9yf5VsWhBSsBiYzdaWVR9I5TbKKs//ZL0b5/RM5ZlNKQBkxQ88SFxLFNYy7oJMC8efylM4PHMqANbUa5wuQDMjYfRQsfwrvHDPIgzruNDbQJFTggnM12V37QgkCItmmEjYzsST1HAEUBRL7FDS0KPRxNyMxJaYI5bj6hRsdjixmZ7rC5PkNb6LCcW7Wmm95aTJY6mDAAJkuYQegkT1SxfnidYQi7ieJ1IPG5v0Oii1aeaYJmDGw06bLn3DO2jnuHeGBAyzBJiM0yNYtrvut9Qx7XzYWA0NiCJE/NStw6YQSOLOUh4ThjgQ57wTsBoPfUqwa/Lroq+ti3tkgDSwkz7qF3tcuB7yQ7QBonnBtZEVx4hhUW5Jl+4jUGU/Qeo1G+uvz9Uum5OpZuGDFGTByJIqMUbEYZr8pc0EtdmbI0cARI5GCR6lS2XEJshcZwkV9W6CKtg5JOYjogqGxvaTtkbFizP4VArmyscUZYw9CPZV9cWQswglPwfEBtc5tL/AF3THaWpTpVYIs45pBnKeY8k7haQOIg6TPnvHyR9oHAuOZjXAaZpgem+q84Dsc5OOZs4DMMeRFcPoMd/aAA5hrGwUqrSbFws5guMvaSxwEWIgZYB0EDySa3a2g1xY6pDuUHTzhbdN9TLgTN1FL1nLTP9scCDWBa4Tlymbm3wz0ElSanCnMw1NwwrHFgPfAOu/J8L9LnUkeiiV6xq1qlfWlTb3gA+24AAT7fILVdjeMNxLLCCPi3v0Pohjk4PUTKcnPH77kXDUhiIwuIbDrVWxYjKRrcjeNefJX2MwGSm5zL1MpDXHVoIuQdjCrMTwCoOIMxLHNDAzxCfEXZXN0jSC32Uj/jdPvDTMmN9STv4dY0umUVUXDSaQ5JIGcfpKvAYhrWw0Q1ttIFtddVbcLxArA+Hwg5SDppP0Kq8dicPW+F4be5vMbgN3NlN4KwGWUmZaQuZ+JzjFzytt5JWrItwxyD4mvYM17gCD9ZRdqcX3NYgNLg6HCDAA0vboFedi8cKwa8AixkGNRbZUvF8GamINQBhYIaJJNmiCYjnO61HY/BBrS4CMxNhYDoPl7IW2prhs7zGbWZdL83tNaNB6pxjbSmmnRSBU8ELaWefMr2Ycd8+puWU2ejDUd/+h9lKaE3h6ocHEbVC3+kQfnKfoi481M6HX5cghSFpQrG58/xVNhH1M9QT4WuNj+8GuH+aPRVtbCgTkGWlk4NJO5G34qOLmNtvwUHiNWrkJENdsRLtbCRbzUbF41gaGudkeRmA0dDSMxEgg2+oSLMScRoLiZ/t/iKgGUBrmlpkQ6QZ1kH6hc5xL/DMbTaBF76W5ac10rilQPpOeJe0EgiLzAJIB5AzbVYDG4YHNBzWteHR9mWu18hyQFJ3ZImf6hX8NwCZV9/JgnSNeQ0Ij66rWdluPFjg2qS9hDQQSI8M5AOYyyIm5jqs1Rw7IGYZjOgOUi2hJBGs6QbTYJ/CEmu1lQAAugtaQQATbKZO03RbACIojlWys7rg6gc0E6loN/IadFHxFZ7dKUt6GTJ1hN4N+SGGCCfBe8RJaPKHegVi0yYcLaAgf5gNL7rq24xNxeOTF4bGNLZbJFh68yVLm09VEnLbbU+s2TrKskiIAaN+elvdGRsNBuuRxJ9F10qoLqPRNpUqtsm8xeNoI0FWWlQwywjkcw+9RyyQel/Tf7kbHwZSCUuZcSl4g0tcHjY/n8PVM8UxBqNaCReD18iVaYykCCFm8QwtdBWJrqCH3jozX0Tq2FPYjHEWNYwGLkwTpA2k+c+6yvGmsDsrvE5x6Aho66kq4x3eNeameWZbsdI0mMpHVUGOaSe9BEzB3ANtAeqnSrjnMPqgpqO8ZEhtZiWM8V2uAfa+ZrTZro0+EyOi1fCcZkP6x3vd02/GxokOkQCOZm0BVvA6Gch9U/tSGwAZBYc3MwTZPca4a1j2fq4lrmSQ5xMEEiR80/nccjxM4aavG0knPIPtJB47XfVqVBUfkEZKTmtAgwZcRJd8J3tmCsOONdlp4vDnI8hofIF2O2IO4NlS0apjIBmqGw5AW8T+QF//AGVdYnHMGGNMOFmtaJ1dBAmPco6uWUlv9pLVBXAX9iLGGwdRwqPY5jzrkLoJ0+yfqEfE+PxNHDsLIsXkCZIBAa0HedSmsMDlE+fzskYvB5i1wIDhMkASRtM6/wDtZp1hztOPviaKaYZBOT9M8RfCnmo1kNgOvl5Ex+C33DsOGNDRsqTs/wALygOcL7DkOvVaak1NaCjBLnz+kR9QvDHYvQjrUnE4hrGOe4w1rS4nkGiT8gjJWJ/ShxnusOKDT465g9KbYL/c5W+pWz+VczKUF2CiWX6Ocaa2C7x2rq+IeehfWe+P8S1eH+IeYXOv0NYvNhq1M6srz/K9rY+bXLobSqr1JcYOIdcXPmVGAIJAuIseXmpmK1nmoLWHnYn8hDt6k19yHWc8AEifG0Zd8pIaSfKZ9FW9pKbS1lgXB4ybwb555S2QfNWGGxDJyZjmBiDYnlE6jqkCs0PyuAzT4ZkAn1tKSZhiM8BuZVP4ZL2eFzG5pBaTGgi0xsqjjXZim9+Zua0s1kvqWDA0um8yCdt9CtjiHOHxEMYGmXAmRzPIDqm6WEEMqAgBgOUbSbF8nW1geruagjPEHfizgzn+P7K91TnM41GkBxAaQIzFz5AzBsQY206K54J2XYARVAfYESJcXSdDPVsHqtKWy0uEOad5Gm99wn+GUixrc8Wblmbx8PzhV5JgV0daHd3IQwYp5RmdZ0sBExIIIMbEOcOV1Z0nDNDbOA53P+yjUsSS98mRmEC0g5WmHEHWSTB2UlsBxcRcmPL+HnH1lcPpGgI7iJJMtmwsD6+idwbA1rgJPntrpO10BVHqdL6wL/RLdZp6o0oesR7DnwqbW0Cg4cKbVOnkm1MXPcbQQRqZMyfD8YKtNrxuPY7j3UiVg+z/ABjuXw7/AKbjf90/tfj/ALLcB83FwkqbBYv1jWooNT48eIHhV2NwgcFZpJapdAwwYNWKnImL4pgnZS3TSDtbmqCrhS2GvYQHnLLXNgzY/EbarplXDg6hU/EOz1OpBIuNPcH6geyQ/DtWfl5E0l12Vww5lHXwwLQ1thvIB0tEKFjMDSqDwvuym1gLXaEX8V+pWifwh4EajoYUDA9nDSDg1h8RkzfpHklV+IoPYP2jRsRyMEY588zO/rdJhbRZ8T8pLswkibB09Vd4PANpg7lxl2wnyVizgBMTTbYzcDUGQfdWuH4J+0fQIjm2wAICJVXqrGWbJmewVXvS5rQZa7IRG45LTcM4REOfry/FWGEwLGfC0CdTufMqaxiZo0A3bm/xE7texXaIKTFISQElzlt1V4mS7xOLxLWMc97g1rQXOcdABckrhnaTijsXXfXcCAfDTafs02/CPMySeritD287UfrL/wBWoumiw/2jxpUcDZoO7AR6kdL5nu5EQl9VcAdomv6fpCF+Iw5PUvv0ScQ7vHPpHStTt/Gzxt/wmouzBeeqDnUKtOsz4mODh1LTMHoRI9Su+8Pxja1NlVhlr2hw8iJg9dlamwOIrraDU2feTX3b5fRQK+/IiFNpujyTOIpbK1gysVQ4MqWYATLgCZ1A6azrmgkT1U2juADI1JET6nX0SMxsNwnADfxESNoMX6hIqwzGXBMcaJtEI2Uon79uvsmmASDJgSIGh5+qebVnY/nRWznuUkf9TZmzgEX8UWDv4gLO9QpvdgaD88kgP335fcEGNBvcEx+YOi4YndRFHDNbIDQJJcepOpJ5pJpneDe3v+fmpBKQ8riZw+kDBA08h+HJE90kBKLso1klFQpyoTk8TjJeGannm6TTEBBOoIuYaCrsVxqjTcWOdDhE+oB+9BcbUHGRLitzzgzi581ednuP91FOqSaezt2dOrfoqFyQ5YdbFTkT01lS2LtadWY8EAggg3BFwfIpYK5twnjlTD2b4mbsJPqWn7J+S2nCuO0a9muh+7HWd6Df0laFdqv95iX6R6vqPeW0IixEClAou3MVzE92h3aXKMLvhyd0S1ieY1JCW0oi1SpeONalpGZZ7tH2zwuEkVKmap/2qcOf/Nsz+YhMpXAs80FWqACSQABJJMADck7Bcr7b9ve+nDYR3gNn1RYv5tpb5eup2tc2reEY3ikOxjjhMKbtwzP+o8bGqSPqP5QRK1fCeBYTCCKNFjD+1GZ583m590TazjCSUsSs7n5+k5BwzgmKcBkwtUjmWOaPdwAV5S7O4pok4ap6CfoupHEov1tAf0wt2Y8vrp6CicX4pScyz2OYf3mlt/ULX/oq7RC+Ee7Ul1Keer2f6h/Mt06sx4LXBrhoQQCPUFZbjH6PaFRwq4RxwtZpDmlnwZgZBy/Zv+z7FCXSNScy13qCahdpGJvAlaiD6Kn4DxCo9vd12CniGAd40fC7YVKR3YfkbFW4RjzEOpGr0fdME89ef4qysdfdM1cN+efkkrqfIjFdngyJRoa2Avtp7KTCZ7tw0lAOI6pfc44MJgdx7KlOcmA7oUQmdBp1ldvb2nYEdDuSLPHU/JFBKWymp2s3cjIESxpJkqZQYhTpc/z5pyU1XXAs0USmMdim0qbqjtGiY5nYDqTZPLEdqOLd6/u2HwMOv7TtJ8ht6rtVeKK93nxL6ag3WbfHmUuIxBe5z3auJJ9UEiEF5Ytk5M9OFAGBMsXFJKaNZFnWrtlsRwhFl33G+48ikZijBKnGJ2JbYLtFiqUAP7xo+zUv/i1+aucN27bpVoub1YQ4ezoWSJ6oiQipc4itmipfsToFLtnhDq9zfNjvuBTv/OGD/wC+P6Kn/iuc5Gn7KR+rj9kow1Z9oufS6/czoNft5g26Oe/+Gm7/AFQqXG/pL2o4YnrVcG/4WzPusscOOQTD6cG0DyRF1Z8SR6VV5zHuM9rMdXBDq3dtP2aU0xHV3xH3Ww/R52FbRDcViW5qp8VNjhanP2nDeofl5qs7BcDFat3tQTTpEGDo6pq0eQ19l02rUTumDW8t1Mr1H4VB+HWOYdStyUWq+E8xkqv7R4kUaWYncATzP/op97No2p3Mla8nc8eoCpUnIwkDfb3OpVLie0Le8dQECq0Xz/CwEgZnnTUiG6kkDdRG9uKjWPcyAaTRAPw5j4WWHxbnyaVjQXFz3VB3p7wOLdRisY8xSp/vU6ZJc7mQ7mxUCqcgsSfv/wASM2DkgAfvzOhYUlsEGxGYFx/uxd1Wof3joOs84vMFiCWh0ETztba23ksj2NxDsTNNzu8FNwNSsSCcQ5sZQ0Af9MOzdCA0/wB45bv9XgK3xABgyyqTyIKlIVADOV7btcNWn7wdxujwXEA55pPhtZokt2c3Z9P9pvzBseqWWKgdquFGvRD6ZLa9KX0nNMOkDxNB6j5wlbfl5EZTngzQgpTXLA9nu3ejMUIOgqtFj/G0aHqLdAtxh8Q17Q5jg5p0c0gg+RCGjrYMqZd0ZDhhHyxp6fRIdheUH89UoFKlVaoGQHIjP6q79kpQwjuRToKOVT4IlviGJbhY1IHzSwANAiQVxUBKloaCj4zGspNzPcGj5nyGpWQ4x2gfVljAWM+bvMjQdEHUaqvTj5u/aHo01lx+Xr3k3tJx6QaVI9HvHza37ysw0I4QXmdRqXvfc3/k9BRQtK7VhIktBL5h5iSBMwiJSjCSSFtwkIlGCiL0JlTJipS2uTeVLa1QZ0dD+qSg1qPKFSRBkUZ9O8qXKe4Xhw+tSZs6o0HykT8pVlJlWO0Ezo3Z7AChhqbIvGZ38Trn8PRT2hLe2fzyuhTC36yETAnjbCbHLGOsaqvtJghUpXEgOB+o++fRWoS8oIINwhlyTLbeJz/hfZrvO8ax9M1A4HuiYc6ACIOlp0nmqPGcIqMdka1weAWNbEEOquyuDABYloAzcgOQTnaFlSnjXMwxc5wOa2oOWSJ5AKfX7VVXtp974qjJgloDgD1idrIeXU5Ej5SMGXnZzsy7B1Wl1nd3kIBkAZg4T+9MrZgrIdkeIGtnLnSRlnneb/JasGFLO27LSyqNuBA9qXhyicUmkbogeV2zBdpOEMbXeIgE5h5Ov9ZHoonD21aJmlUc3yNj5tNitR2xp+Om7m0j2Mj/ADFUNMrzOpZ6bmCnzPRafbbSpYZlxgu1tUWq02u6tOU+xkH5K5odqqDhfOw/vNn/ACysiUWUcldPVr175+8G/p1LdDH2m5Zx7Dn+9b6hw+oRu49hx/ej0Dj9AsLkHJGAjfxm3+0f/f8AuC/hVf8AcZsK3aekPhD3ekD3P4KtxfaWq6zA1nX4ne5t8lREoSlbfU9Q/GcfaHr9PpTxn7xys9zjmc4uPMmSmoQlAlIkknJjoGBgQoS6bUhMurwYFzsOZUhS3AknrMm5AiT2eiLFz53gCJ3Rpr+H3fT/ADEvxlf1/wATnhSiEEE/NKIcjCCCmWiglsRIKpkR0pMo0FSRAFYdm/8A5dH+P/SUEFdPzCDu/pt9j+k6fv6H6FBqCC3D1PIDuPMTjtkEEMdy56mM7HtBr4p0DNm13u6TdafHYZjqfiY11t2g/VEgrjqDMxnYi2KeBYdzp/MFvW6IIIdsvV1HBok09UEFCSzSm7ZaUv5/9KzdNBBef9R/rt/t+k3ND/RH78xcogEEFnx2KQKCC6TCKCCC6dAgEEFM6Kfoq93/AFG/nmjQRtN+cQdn5DLPBjwN8kEEFvL1MY9z/9k="
          },
          {
            storeNO:"126592",
            storeName:"마녀주방",
            address:"서울특별시 강남구 역삼1동 818-14 크리스탈빌딩 지하1층",
            storeScore:"3.6",
            userNickname:"315513",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"스테이크, 피자, 음료까지 전부 다 너~ 무 맛있었는데 로제파스타는 그저 그랬어요 ㅎㅎ 다른메뉴는 다 맛있는것같아요!",
            wish :"false",
            url:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20200611_105%2F1591883036133QGuEa_JPEG%2Fimage.jpg"
          },
          {
            storeNO:"303270",
            storeName:"요멘야 고에몬",
            address:"서울시 서초구 서초4동 1317-13 1층",
            storeScore:"3.5",
            userNickname:"919073",
            userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
            content:"저는 너무맛있었어요ㅠㅠ지금 또 생각나는 맛이예요 파스타 불은거 별로 안좋아하는데 천천히 먹었는데도 끝까지 파스타가 살아움직입니다...!!탱글탱글해요",
            wish :"false",
            url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTFfMTgz%2FMDAxNTk3MTExNTcxNDc3.Ri_tC_CuowRNM9uUc8H6F3BFumhynGqTGLazAb9OsM4g.UpQiQzuaAPh7aeLrHCi-kO5-B5OffVkRQnxZX_rw7i0g.JPEG.thsrudgus1%2F2.jpg"
          },
      ],
    };
    console.log(this.state.paramslist);
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }

    const storelist = this.state.contentNO=="01" ? this.state.contentNO01 : this.state.contentNO01; ////////////////////////////////////////////////////////////////////////////////////
    const storeList = storelist.map(
      (store,i) => (    
      <div>
        <JMTContentListCard1
          storeNO={store.storeNO}
          storeName={store.storeName}
          address={store.address}
          storeScore={store.storeScore}
          userNickname={store.userNickname}
          userProfile={store.userProfile}
          content={store.content}
          wish ={store.wish}
          url={store.url}>
        </JMTContentListCard1>
      <hr style={{width:"1000px", marginLeft:"-70px", marginTop:"-30px",marginBottom:"35px"}}></hr>
      </div>
      )
    );
    return (
      
      <Wrapper className="JMTpage">
        <Headerdiv>
          <ContentNameH2>{this.state.contentName}</ContentNameH2>
          <ContentNameMentH2>"{this.state.contentName}"의 원하는 음식점을 누르면 자세한 정보를 확인 할 수 있어요</ContentNameMentH2>
        </Headerdiv>
        <div style={{marginBottom:"100px"}}>
          <ul>
            {storeList}
          </ul>
          {/* <Pagination
            defaultActivePage={1}
            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
            prevItem={{ content: <Icon name='angle left' />, icon: true }}
            nextItem={{ content: <Icon name='angle right' />, icon: true }}
            totalPages={10}
          /> */}
        </div>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const { stores, isLoading, error } = state.stores;
  return { stores, isLoading, error };
}


Category = connect(mapStateToProps, null)(Category);
export default Category;
