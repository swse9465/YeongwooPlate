import React, { Component } from "react";
import { Icon, Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import {withGoogleMap, Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import ReviewCard from "../components/ReviewCard";
import { Row, Col,Select} from 'antd';
import { Link } from "react-router-dom";
import { fetchDetailStoreDataStarted } from "../actions";
import { connect } from "react-redux";
import CreateReview from "./CreateReview";
import { Button,Popup } from 'semantic-ui-react'
import Loader from "../components/Loader";

const Wrapper = styled.div`
  text-align: center;
  margin: 1%;
`;
const DetailImg = styled.img`
  width: 400px;
  height: 400px;
`;
const Text = styled.span`
  font-weight: 600;
  font-size: 30px;
  margin: 1%;
`;
const ScoreText = styled.span`
  color:${(props) => props.theme.orangeColor};
  font-weight: 600;
  font-size: 30px;
  margin: 1%;
`;
const SText = styled.span`
  font-weight: 600;
  font-size: 15px;
  margin: 1%;
`;
const GText = styled.span`
  font-weight: 600;
  font-size: 15px;
  margin: 1%;
  color: gray;
`;
const DetailDiv = styled.div`
  text-align: center;
  margin: 2%;
`;
const ELink = styled(Link)`
  color: inherit;
  margin: 5px 10px;
`;
const gridStyle = {
  width: '33%',
  textAlign: 'center',
};

const mapStyles = {
  width: '300ox',
  height: '300px'
};
const textStyles = {
  width: '100%',
  height: '50%',
  textAlign: 'justify'
};
const Th = styled.th`
padding: 1%;
`;
const { Option } = Select;
const Toggle2 = styled.span`
  &:hover {
    color: #ffa684;
  }
`;
function handleChange(value) {
  console.log(`selected ${value}`);
}

class DetailStore extends Component {
  state = {
    stores: null,
    data: null,
    start: true,
    cur:5,
    sort: 0,
    store_id:null,
    createReviewPage: false,
    wish:false
  };
  onSearchStores = (store_id) => {
    const params = { id: store_id, sort: this.state.sort };
    this.props.dispatch(fetchDetailStoreDataStarted(store_id));
  };
  onAddReview = ()=>{
    this.state.cur+=5;
    this.props.dispatch(fetchDetailStoreDataStarted(this.state.store_id));
  };
  onMoveCreateReview = () =>{
    this.state.createReviewPage = true;
    this.props.dispatch(fetchDetailStoreDataStarted(this.state.store_id));
  };
    render() {
      if(this.state.start)
      {
        this.state.store_id = { id:this.props.location.pathname.split("/")[2]};
        this.onSearchStores(this.state.store_id);
        this.state.start=false;
      }
      if (this.props.isLoading||this.props.detailStore.length==0) {
        return <Loader></Loader>;
      }
      if(this.state.createReviewPage)
      {
        this.state.createReviewPage=false;
        return <CreateReview detailStore={this.props.detailStore}/>;
      }
        return (
          <div>
              <div>
              <DetailImg src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjFfMTk5%2FMDAxNTk3OTk1MDI5NTM0.fyLE_T5CCzPrE8oYFINTLXsXgOLsVxDOUxPGtF84u3Ag.sZH_M0hhdST7CVJEyqLVrXzRtQb-CYvAag92w9QffNEg.JPEG.yeonjae1993%2FIMG_2181.jpg&type=sc960_832' />
              <DetailImg src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTFfMjgy%2FMDAxNTk5ODI1MDIzODYw.lm4Zi28C48qSlbAr4T225N1ThQI5u70FvHSb3h4p_K0g.D-YMe-2O9lNVGiDasXjZsEotfEtAUgzgn3fYFJBWUmgg.JPEG.yeh_suh%2FKakaoTalk_20200911_201718232_18.jpg&type=sc960_832' />
              <DetailImg src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjBfMTQ4%2FMDAxNTk1MjIyMjUyNzM5.PNpzD4t3UXrUdZvW9aifuLRTy3oizT3mZUVwqBqRigQg.KqSN33vyYOyW1E-VNS61nBFRjCl9pS26f0Z4PnrinSMg.JPEG.iamchristy0304%2F51B35633-B197-4B87-B2CA-9405470F01A0.jpg&type=sc960_832' />
              </div>
              <Wrapper>
                  <DetailDiv>
                    <Text>{this.props.detailStore[0].name}</Text>
                    <ScoreText>4.1</ScoreText>
                  </DetailDiv>
                  <DetailDiv>
                  { this.state.wish === true &&
                                <Icon fitted name='star'  color='orange'/>
                            } 
                            { this.state.wish === false &&
                                <Icon fitted name='star outline'  color='orange'/>
                            }
                    <SText>350</SText>
                    <Toggle2>
                    <Icon name="pen square" onClick={this.onMoveCreateReview} />
                    </Toggle2>
                    <SText>{this.props.detailStore[2].length}</SText>
                  </DetailDiv>
                  <DetailDiv>
                    
                  <Row align="middle">
                    <Col span={12}>
                    <table style={textStyles}>
                                <tbody>
                                  <tr>
                                    <Th><GText>위치</GText></Th> 
                                    <Th><SText>{this.props.detailStore[0].address}</SText></Th>
                                  </tr>
                                  <tr>
                                    <Th><GText>전화번호</GText></Th>
                                    <Th><SText>{this.props.detailStore[0].tel}</SText></Th>
                                  </tr>
                                  <tr>
                                    <Th><GText>음식종류</GText></Th>
                                    <Th>
                                      {
                                        this.props.detailStore[0].category_list.map((category, index) =>{
                                          if(index!=0)
                                          {
                                            return(
                                              <SText>/  {category}</SText>);
                                          }else{
                                            return(
                                              <SText>{category}</SText>);
                                          }

                                        })
                                      }</Th>
                                  </tr>
                                  <tr>
                                    <Th rowSpan={this.props.detailStore[1].length+1}><GText>메뉴</GText></Th>
                                    {
                                    (this.props.detailStore[1].length==0?<Th><SText>알 수 없음</SText></Th>:null)
                                  }
                                  </tr>
                                  {
                                        this.props.detailStore[1].map((menu) =>{
                                          return (
                                          <tr><Th><SText>{menu.name}</SText><SText>{menu.price}</SText></Th></tr>);
                                        })
                                      }
                                </tbody>
                              </table>
                    </Col>
                    <Col span={12}>
  
                                              <Map
                        google={this.props.google}
                        zoom={15}
                        style={mapStyles}
                        initialCenter={{ lat: this.props.detailStore[0].latitude, lng: this.props.detailStore[0].longitude}}
                      >
                        <Marker position={{ lat: this.props.detailStore[0].latitude, lng: this.props.detailStore[0].longitude}} />
                      </Map>
                      <DetailImg src='https://t1.daumcdn.net/cfile/blog/21059A38519F923E10' style={{width:"300px",height:"300px"}}/>
  
                    </Col>
                  </Row>
  
                  <div style={{  marginTop: "3%"}}>
                    <Row align="middle">
                      <Col flex={1} style={{textAlignLast: "left"}}> <SText>리뷰</SText></Col>
                      <Col flex={1} style={{textAlignLast: "right"}}>
                      <Select defaultValue="like" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="date">최신순</Option>
                        <Option value="like">인기순</Option>
                      </Select>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <hr/>
                  </div>
                  </DetailDiv>
                  <DetailDiv>
                    {
                      this.props.detailStore[2].map((review,index) =>{
                        if(index >=this.state.cur)
                        return;
                        console.log(index);
                        return(
                        <ReviewCard nickname={review.user} 
                        url="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927" 
                        content={review.content}
                        likeCnt={review.like}
                        score={review.score}
                        id={review.id}
                        isLike={true}
                      />);
                      })
                    }
                    {
                     (this.props.detailStore[2].length< this.state.cur?null:<Button basic color='orange' onClick={this.onAddReview}>더 보기</Button>)
                    }
                    
                  </DetailDiv>
              </Wrapper>
          </div>
        );
      
     
    }
  }
  let mapStateToProps = (state) => {
    const { detailStore, isLoading, error } = state.detailStore;
    return { detailStore, isLoading, error };
  };
  
  DetailStore = connect(mapStateToProps, null)(DetailStore);
  
  export default  GoogleApiWrapper({
    apiKey: "AIzaSyC6dwyQzWEGJ_YXua58zdSpJDstypGe3K8"
  })(DetailStore);
