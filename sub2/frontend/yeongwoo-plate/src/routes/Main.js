import React, { Component } from "react";
import "../style/Main.css";
import "antd/dist/antd.css";
import JMTContent from "../components/JMTContent";
import CategoriContent from "../components/CategoriContent";
import BigDataContent from "../components/BigDataContent";
import { Row, Col } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { Icon,Input  } from "semantic-ui-react";
import { geolocated } from "react-geolocated";
import {withGoogleMap, Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import useInput from "../hooks/useInput";

const contentStyle = {
  height: "550px",
  color: "#f11",
  width: "1620px",
  // backgroundColor: "#F11111"
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainpage_ment: [
        "인생은 고기서 고기다",
        "오늘은 먹고 다이어트는 내일부터",
        "좋은 음식은 공복인 아침에 먹어야 한다",
        "아무리 먹어도 배는 터지지 않는다",
        "정신들 똑바로 차리고 먹어라",
        "먹고 있는데도 먹고싶다",
      ],
      random: parseInt(Math.random() * 6),
      headerphoto: [
        "https://i.ibb.co/jHF6CYK/3.jpg",
        "https://i.ibb.co/MDN8SV7/2.png",
        "https://i.ibb.co/ws2B1db/1.jpg",
        "https://i.ibb.co/9b149YR/mainheader.png",
      ],
      randomPhoto: parseInt(Math.random() * 4),
      btn_color1: true,
      btn_size1: true,
      btn_color2: false,
      btn_size2: false,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.setState({ btn_color1: !this.state.btn_color1 });
    this.setState({ btn_color2: !this.state.btn_color2 });
    this.setState({ btn_size1: !this.state.btn_size1 });
    this.setState({ btn_size2: !this.state.btn_size2 });
    this.carousel.next();
  }
  previous() {
    this.setState({ btn_color1: !this.state.btn_color1 });
    this.setState({ btn_color2: !this.state.btn_color2 });
    this.setState({ btn_size1: !this.state.btn_size1 });
    this.setState({ btn_size2: !this.state.btn_size2 });
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }

    let btnColor1 = this.state.btn_color1 ? "#ffc983" : "#E2E2E2";
    let btnSize1 = this.state.btn_size1 ? "28px" : "24px";
    let btnColor2 = this.state.btn_color2 ? "#ffc983" : "#E2E2E2";
    let btnSize2 = this.state.btn_size2 ? "28px" : "24px";

    return !this.props.isGeolocationAvailable ?(
        <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (

      <div classnames="workspace">
        <div id="main" className="mainpage" style={{ textAlign: "center",marginBottom:"60px"}}>
          <img
            style={{
              filter: "brightness(75%)",
              position: "relative",
              marginLeft: "-200px",
              marginTop: "-65px",
              width: "2000px",
              height: "520px",
            }}
            src={this.state.headerphoto[this.state.randomPhoto]}
          />
          <h2 className="box-ment">
            {this.state.mainpage_ment[this.state.random]}
          </h2>
          {/* ///////////////////////////////////////////////////////////// */}
          <div style={{textAlign:"center",position:"absolute",top:"230px",left:"410px"}}>
            <form>
              <Input
                id="searchInput"
                action={{ icon: "search", color: "orange" }}
                placeholder="Search..."
                style={{
                  width: "800px",
                  height:"50px"

                }}
              />
            </form>
          </div>
        </div>

        <div className="mainpage">
          <h2 className="contentsName">영우 님에게 추천하는 맛집</h2>
          <div className="bigdatacontents">
            <Row>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTRfMjQ1%2FMDAxNDg0MzkxNjA5OTU0.xStiRgzZyb4HOpXp6sIdY0jhjUCOHtM-Kc3QkXe3xtIg.aEfH1DYOlyPjw0JJ3WhztI-gaiAaDRqxl95ffZmHHXwg.JPEG.kellyhj34%2FIMG_20170108_105821.jpg&type=sc960_832"
                  contentName="중앙해장"
                  score="4.2"
                  location="삼성역"
                  category="곱창전골|내장탕"
                  storeNo="359300"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MjJfMTAz%2FMDAxNTkyNzkyNzMyOTQz.QrBwHlKgJJ_bTMA-yLVJbgHp4fFI6hvTRwpnbAESpcQg.nYBxchLEactwGdIiy4vRCbgINys_SAroERHRWx6qwdEg.JPEG.tnrltnrld89%2F1592792731198.jpg&type=sc960_832"
                  contentName="별미곱창"
                  score="4.0"
                  location="방이동"
                  category="소곱창|곱창"
                  storeNo="178307"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160812_279%2Fgense2song_1470981992659VWLNH_JPEG%2F%25C3%25E1%25C3%25B5_%25BB%25F9%25B9%25E7%25B8%25B7%25B1%25B9%25BC%25F6_%25284%2529.jpg&type=sc960_832"
                  contentName="샘밭막국수"
                  score="3.4"
                  location="올림픽공원"
                  category="막국수|녹두전"
                  storeNo="214532"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MThfMTEw%2FMDAxNjAwNDE3NjI2NTM4.obud6Pe2bkJrd8Hq3cEp8BXVJkXcsLH_7qDd2kGFNUUg.RbyciG-RQi1_yqKpiQ3qVf2cq555rt3drv5hmMSkI-Ug.JPEG.moneyhero3230%2Fefdfefed.JPG&type=sc960_832"
                  contentName="뽕나무쟁이 족발"
                  score="4.3"
                  location="선릉"
                  category="양념족발|족발"
                  storeNo="201941"
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150216_38%2Fkind_boy77_1424080858271Kf6IN_JPEG%2F%25BD%25C5%25C3%25CC_%25C7%25D1%25BD%25C4_%25BF%25BE%25C1%25FD_%25282%2529.JPG&type=sc960_832"
                  contentName="옛집"
                  score="4.5"
                  location="광장동"
                  category="돼지찌개|김치찌개"
                  storeNo="287864"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MjBfMjg4%2FMDAxNTg3MzkxOTY3MDAx.fVHiP_iuIwxHxWUPa5v70_Wg6nt9aqvycAyrN2ixaeUg._96jYsRxwmnKKLmP11kGXazXXsP4rTRdzy23yQx3NA4g.JPEG.dongdongang%2FIMG_2753.JPG&type=sc960_832"
                  contentName="온더보더 "
                  score="3.6"
                  location="코엑스점"
                  category="멕시칸레스토랑|화이타"
                  storeNo="297302"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MTRfMTk3%2FMDAxNTg5NDExOTc5MTkz.IFwY9jtctBbbLAHfFKn53_vaNM0qEGApWdcaRft1giEg.UiMFcAG7GjhIDP7QWKRp77rDnguUJMW8MwW2LtKR_eEg.JPEG.bangwul92%2F%25B0%25AD%25B8%25AA%25B8%25C0%25C1%25FD_%25C2%25AB%25BB%25CD%25BC%25F8%25B5%25CE%25BA%25CE_%25B5%25BF%25C8%25AD%25B0%25A1%25B5%25E7_%252812%2529.JPG&type=sc960_832"
                  contentName="동화가든"
                  score="4.0"
                  location="본점"
                  category="짬뽕순두부|초두부"
                  storeNo="106124"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150327_247%2Fpingcrew_1427425973161WMJnC_JPEG%2F%25B5%25CE%25BA%25CE%25B0%25A1_%25B8%25C0%25C0%25D6%25B4%25C2_%25B3%25B2%25BE%25E7%25C1%25D6_%25B1%25E2%25BF%25CD%25C1%25FD%25BC%25F8%25B5%25CE%25BA%25CE_%25282%2529.JPG&type=sc960_832"
                  contentName="기와집순두부 "
                  score="3.7"
                  location="본점"
                  category="순두부|콩탕"
                  storeNo="48526"
                />
              </Col>
            </Row>
          </div>

          <hr
            style={{ width: "1750px", marginLeft: "-100px", marginTop: "50px" }}
          ></hr>
          <h2 className="contentsName">믿고 보는 맛집 리스트</h2>
          <div style={{ position: "relative" }}>
            <LeftOutlined
              onClick={this.previous}
              style={{
                fontSize: "120px",
                position: "absolute",
                left: "-120px",
                top: "200px",
                color: "#ffc983",
              }}
            />
            <Carousel
              style={contentStyle}
              ref={(node) => (this.carousel = node)}
              {...props}
            >
              <div>
                <div className="contents">
                  <Row>
                    <Col span={8}>
                      <JMTContent
                        contentName="우월한 바삭함 치킨 맛집"
                        contentNO="01"
                        url="https://rereco.co/wp-content/uploads/2018/02/best_menu09.jpg"
                      />
                    </Col>
                    <Col span={8}>
                      <JMTContent
                        contentName="미친 식감의 육회 맛집"
                        contentNO="02"
                        url="https://cdn.onul-hoi.com/uploads/store_package/image/562/0f8509_200520101022.jpg"
                      />
                    </Col>
                    <Col span={8}>
                      <JMTContent
                        contentName="이게 파스타구나... 이게 진짜였어..."
                        contentNO="03"
                        url="https://i.ytimg.com/vi/iPC2LqphJ9Q/maxresdefault.jpg"
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "20px" }}>
                    <Col span={8}>
                      <JMTContent
                        contentName="인생은 써도 술은 달다"
                        contentNO="04"
                        url="https://cdn.univ20.com/wp-content/uploads/2016/10/86511920a1ac1dea3ba7e3f86486c003.jpg"
                      />
                    </Col>
                    <Col span={8}>
                      <JMTContent
                        contentName="가짜사나이도 반한 부대찌개 맛집"
                        contentNO="05"
                        url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMjhfMTg3%2FMDAxNTgyODczNjkzODQ4.5h_Os6z6flTRaImk8lUCvDebgCM7w32zhl9cytSYG6kg.2Drtkoh59Dq_rjq60O0lZw5OYtkwyOr2FAlmKcy22F0g.JPEG.mkiwa89%2FDSC06554.JPG&type=sc960_832"
                      />
                    </Col>
                    <Col span={8}>
                      <JMTContent
                        contentName="맛있는 커피와 함께"
                        contentNO="06"
                        url="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200107_114%2F157839375530249k5j_JPEG%2FB_1XbrNs-ZpAjFZ_D8DZTq5G.jpg&type=sc960_832"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="contents">
                  <Row>
                    <Col span={8}>
                      <JMTContent
                        contentName="하나 죽어도 모르는 떡볶이 맛집"
                        contentNO="07"
                        url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjNfMjA3%2FMDAxNTk1NDgxMDcwNDMx.p-WqcdkcWJlewY0WmKOltn7TJ1Gt3IR5qsFW1LAkGPIg.eXxEAv1u1Ykl-4QGm2beOgMLSzJ2V0KLy4IgbbfoG5Qg.JPEG.gypsyone%2F%25B8%25B6%25B4%25C3%25B6%25B1%25BA%25BA%25C0%25CC_07.JPG&type=sc960_832"
                      />
                    </Col>
                    <Col span={8}>
                      <JMTContent
                        contentName="찌개가 근본"
                        contentNO="08"
                        url="https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2F20160602_201%2Fdksmf2626_1464828145800U1hbS_JPEG%2Fmug_obj_201606020942271861.jpg&type=sc960_832"
                      />
                    </Col>
                    <Col span={8}>
                      <JMTContent
                        contentName="피자를 먹기위해 태어난 걸까?"
                        contentNO="09"
                        url="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191122_1%2F1574384492602VKnvl_JPEG%2FfQ8ikjUdXASj4sg0Dh9dzzlD.jpg&type=sc960_832"
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "20px" }}>
                    <Col span={8}>
                      <JMTContent
                        contentName="여기 모르면 초밥 다시 배워"
                        contentNO="10"
                        url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMjBfMjM4%2FMDAxNTgyMTc0MzQzNTgz.HyA2JE1Ie_wQEYWXKg38v2dgLZWwhU6M3M6EiTj9eM0g.uXGKfROHrDxq4vdbo_8n2-55htUbevUr7q5r3D5_4h8g.JPEG.marinehhh%2FIMG_3153.JPG&type=sc960_832"
                      />
                    </Col>
                    <Col span={8}>
                      <JMTContent
                        contentName="고기의 맛은 구이로 느껴야한다"
                        contentNO="11"
                        url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA2MDFfMjYx%2FMDAxNTI3ODIxOTQ3OTQx.7DC4jsk2-8B7t20Rnr1Kf9LQvHmXJ564Up_YwUTDlgog.tuFnqt5cjaDFh3GqqKc2GhGOoQHq0RG1PPMeE3SFcE0g.JPEG.alsdkqjwl817%2F%25B1%25E6%25B5%25BF%25B5%25A5%25C0%25CC%25C6%25AE%25B8%25C0%25C1%25FD_-_%25B0%25ED%25B1%25E2_%25C1%25C1%25BE%25C6%25C7%25CF%25B4%25C2_%25C4%25BF%25C7%25C3_%25B8%25F0%25BF%25A9%25B6%25F3_%25C0%25CE%25BB%25FD%25B0%25ED%25B1%25E2_%252814%2529.jpg&type=sc960_832"
                      />
                    </Col>
                    <Col span={8}>
                      <JMTContent
                        contentName="국밥에 소주는 마약과 같다"
                        contentNO="12"
                        url="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20121228_127%2Fgs386_1356668468388UuiGA_JPEG%2F%25BA%25CE%25BB%25EA%25B5%25C5%25C1%25F6%25B1%25B9%25B9%25E4%25B8%25C0%25C1%25FD.jpg&type=sc960_832"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Carousel>
            <RightOutlined
              onClick={this.next}
              style={{
                fontSize: "120px",
                position: "absolute",
                left: "1580px",
                top: "200px",
                color: "#ffc983",
              }}
            />
            <div style={{ width: "1580px", textAlign: "center" }}>
              <Icon
                name="circle"
                style={{
                  color: btnColor1,
                  fontSize: btnSize1,
                  cursor: "pointer",
                }}
                onClick={this.previous}
              />
              <Icon
                name="circle"
                style={{
                  color: btnColor2,
                  fontSize: btnSize2,
                  cursor: "pointer",
                }}
                onClick={this.next}
              />
            </div>
          </div>

          <hr style={{ width: "1750px", marginLeft: "-100px", marginTop: "50px" }}></hr>
          <h2 className="contentsName">Top20 맛집 리스트</h2>
          <div className="categoriContents">
            <Row>
              <Col span={4.8}>
                <CategoriContent
                  contentName="치킨"
                  url="https://i.ibb.co/p1TRzMM/meat-food-chicken-icon-146854.png"
                />
              </Col>
              <Col span={4.8}>
                <CategoriContent
                  contentName="피자"
                  url="https://i.ibb.co/qYPrH11/pizza2.png"
                />
              </Col>
              <Col span={4.8}>
                <CategoriContent
                  contentName="햄버거"
                  url="https://i.ibb.co/5R8cQsL/fast-food-icons-freeburger-107425.png"
                />
              </Col>
              <Col span={4.8}>
                <CategoriContent
                  contentName="파스타"
                  url="https://i.ibb.co/jk8GkSy/pasta2.png"
                />
              </Col>
              <Col span={4.8}>
                <CategoriContent
                  contentName="고기"
                  url="https://i.ibb.co/GJZSZz8/meat2.png"
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "50px" }}>
              <Col span={4.8}>
                <CategoriContent
                  contentName="분식"
                  url="https://i.ibb.co/GnQdQVz/shaomai-asian-food-icon-142380.png"
                />
              </Col>
              <Col span={4.8}>
                <CategoriContent
                  contentName="야식"
                  url="https://i.ibb.co/nBPXmPJ/if-food-c220-2427862-85709.png"
                />
              </Col>
              <Col span={4.8}>
                <CategoriContent
                  contentName="일식"
                  url="https://i.ibb.co/m4PGt41/japanese-Food2.png"
                />
              </Col>
              <Col span={4.8}>
                <CategoriContent
                  contentName="디저트"
                  url="https://i.ibb.co/XscxBdk/dessert2.png"
                />
              </Col>
              <Col span={4.8}>
                <CategoriContent
                  contentName="한식"
                  url="https://i.ibb.co/RbGg8VV/korean-Food2.png"
                />
              </Col>
            </Row>
          </div>
          <hr style={{ width: "1750px", marginLeft: "-100px", marginTop: "50px" }}></hr>
          <h2 className="contentsName">영우 님 주변 맛집</h2>
            <div>
              <Map
                google={this.props.google}
                zoom={15}
                initialCenter={{ lat: 37.501023, lng: 127.02763}}
                style={{width:"1500px",height:"500px",marginLeft:"40px"}}
              >
                <Marker position={{ lat: 37.49904, lng: 127.028516}} label="A" title="에이와이라운지" />
                <Marker position={{ lat: 37.503384, lng: 127.025754}} label="B" title="고요남"/>
                <Marker position={{ lat: 37.502754, lng: 127.035254}} label="C" title="대우식당"/>
                <Marker position={{ lat: 37.501023, lng: 127.02763}} label="D" title="은행골"/>
                <Marker position={{ lat: 37.49881, lng: 127.028996}} label="E" title="갓덴스시"/>
                <Marker position={{ lat: 37.5027, lng: 127.027}} label="F" title="낙원타코"/>
                <Marker position={{ lat: 37.49859, lng: 127.025852}} label="G" title="단타이펑"/>
                <Marker position={{ lat: 37.500774, lng: 127.028255}} label="H" title="어글리스토브"/>
              </Map>
            </div>
            <img src="" style={{width:"1500px",height:"500px", marginBottom:"30px",marginLeft:"40px"}}></img>
            <div className="bigdatacontents" style={{marginBottom:"100px"}}>
            <Row>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20200619_177%2F1592576147591bek6G_JPEG%2Fimage.jpg"
                  contentName="에이와이라운지"
                  score="4.7"
                  location="강남역"
                  category="라운지바|술집"
                  storeNo="277323"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MzBfOTgg%2FMDAxNTk4NzUxNjgwNTc5.SCj4Gvwr6nSLFwMODu_Qh3H1uEF31rXn8DD_Nk7Y8CEg.ADiwgAC8E7lB1loazE4dOtA5PcBg4jJc3XS1AxOryFEg.JPEG.eovk1379%2F%25C1%25D6%25BC%25AE_2020-08-30_102139.jpg"
                  contentName="고요남"
                  score="4.3"
                  location="강남역"
                  category="한우육회초밥|육회"
                  storeNo="29244"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjNfMTE1%2FMDAxNTk4MTUzNzcyNDM0.VxLF1WeAOHFbKKZBuj3ALyCFZIIjJFtsRfTu3waGSDgg.FyHkLeqL9-VeJPvEBpBMEev0SPifCQkOflClBks6zWwg.JPEG.sorbet20%2FKakaoTalk_Photo_2020-08-22-20-17-30.jpeg"
                  contentName="대우식당"
                  score="4.2"
                  location="역삼동"
                  category="미나리|부대찌개"
                  storeNo="86534"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDJfNjUg%2FMDAxNTk2MzE4ODUwNzE2.lwfy8IZOxSMk0EK_vv9Ulcp0U9H3HMsuy6dlo-_zLCkg.rtgCRSmGykFR-4uL1OjFkJ8akY-ReOkB8EDvHAKZypEg.JPEG.yudsun66%2F1596318847921.jpg"
                  contentName="어글리스토브"
                  score="3.9"
                  location="강남역"
                  category="브런치|파스타"
                  storeNo="271833"
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MjdfMTg0%2FMDAxNTkzMTg3MTA5MzQ0.Sz-4D12U81-C6Lu6_lKPoHAWjua2W4HcHYcVCAhRBRsg.ybAxYOCXYoglfxwzyQcNTiU9UH9ypj3O75msuzIiGqAg.JPEG.sylovesall%2F1593187108841.jpg"
                  contentName="은행골"
                  score="4.1"
                  location="강남역"
                  category="초밥|참치"
                  storeNo="321046"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTRfMTEy%2FMDAxNTk3Mzc2Mjg5OTQ4.CK-vbeAvKEXyLzh3t076QwN2ub0CRCMMUJbJfYGMR-Qg.edE7GchFb-BUymATHvbWxwpVbQo6avvlRl8KTK0QdpYg.JPEG.haerieva%2FKakaoTalk_20200724_145546706_02.jpg"
                  contentName="갓덴스시 "
                  score="4.1"
                  location="강남역"
                  category="회전초밥|초밥"
                  storeNo="17713"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDdfMjE1%2FMDAxNTk2ODA5ODQwMjA5.m6wx6au-b3Yl_ra7bZNLbbUjMkQhdi8oPPlodNjWHtog.OlUabyrxTNHb5_Mo08594CJRIiopQXvK9185Kzcnb20g.JPEG.italyboy1%2F%25C4%25DA_%25282%2529.jpg"
                  contentName="낙원타코"
                  score="4.0"
                  location="본점"
                  category="짬뽕순두부|초두부"
                  storeNo="61931"
                />
              </Col>
              <Col span={6}>
                <BigDataContent
                  url="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20200617_188%2F1592381631594MFlNn_JPEG%2Fimage.jpg"
                  contentName="딘타이펑 "
                  score="3.9"
                  location="강남역"
                  category="샤오롱바오|딤섬"
                  storeNo="112024"
                />
              </Col>
            </Row>
          </div>


        </div>
      </div>
    ): (
      <div>Getting the location data&hellip; </div>
  );
  }
}

Main = geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Main);

export default GoogleApiWrapper({
  apiKey: "AIzaSyC6dwyQzWEGJ_YXua58zdSpJDstypGe3K8"
})(Main);

