import React, {Component } from "react";
import { connect } from "react-redux";/////////////////////////
import "antd/dist/antd.css";
import styled from "styled-components";
import JMTContentListCard1 from "../components/JMTContentListCard1";
import JMTContentListCard2 from "../components/JMTContentListCard2";
// import { Icon, Pagination } from 'semantic-ui-react';
// import { fetchDataStarted } from "../actions";/////////////////////



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

class JMT extends Component {
  // Categori = (params) => {////////////////////////////////////////
  //   this.props.dispatch(fetchDataStarted(params));
  // };
  constructor(props) {
    super(props);
    this.state = {
      // paramslist:this.props.dispatch(fetchDataStarted()),
      contentNO:props.match.params.contentNO,
      contentName:"우월한 바삭함 치킨 맛집",
      contentNO01: [
        {
          storeNO:"3191",
          storeName:"60계 치킨",
          address:"서울특별시 강서구 마곡동 758-1",
          storeScore:"4.0",
          userNickname:"179544",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"고추치킨 맛잇어요 60계하면 고추치킨이죠 ㅎㅎ 더매운것도 맛잇다네요",
          wish :"false",
          url:"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F992DD0475C0051D311"
        },
        {
          storeNO:"5045",
          storeName:"BBQ",
          address:"경기도 남양주시 진접읍 장현리 92-1",
          storeScore:"3.0",
          userNickname:"392082",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"가볍게 치맥하기에 좋습니다. 다만 내부가 너무 시끄러워서 대화 하기가 힘드네요.",
          wish :"false",
          url:"https://pds.joins.com/news/component/htmlphoto_mmdata/201811/18/abdf48cb-a4eb-40bf-976f-f76e12b1bedd.jpg"
        },
        {
          storeNO:"6592",
          storeName:"BHC치킨",
          address:"서울특별시 동작구 사당동 1029-45",
          storeScore:"4.5",
          userNickname:"72686",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"뿌링클만 먹음 근데 조금 짜다 맛초킹먹어봤는데 뿌링클이 더 나음",
          wish :"false",
          url:"https://www.100ssd.co.kr/news/photo/201911/65167_45054_4842.jpg"
        },
        {
          storeNO:"53624",
          storeName:"김포닭장수",
          address:"서울특별시 강서구 등촌동 668-7",
          storeScore:"5.0",
          userNickname:"159564",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"치킨먹고싶을때 가는 단골집인뎅 맥주가격이 다른데에 비해서 쌈! 치맥하러 자주감ㅎㅎ",
          wish :"false",
          url:"https://t1.daumcdn.net/cfile/tistory/227ABC39551A8F273E"
        },
        {
          storeNO:"68470",
          storeName:"노랑통닭",
          address:"인천광역시 부평구 부평5동 915-2",
          storeScore:"3.0",
          userNickname:"870790",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"직원분이 친절하셨습니다. 맛은 그저 그랬습니다.",
          wish :"false",
          url:"https://rereco.co/wp-content/uploads/2019/01/norangtongdak_menu5.jpg"
        },
        {
          storeNO:"139813",
          storeName:"맥시칸치킨",
          address:"경상남도 거제시 사등면 덕호리 107-86",
          storeScore:"5.0",
          userNickname:"132643",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"가게 앞 주차공간 조금 있구요. 진짜 숨은맛집이에요~! 멀어도 맛있어서 찾아갔어요",
          wish :"false",
          url:"https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F99FA18485BC8EB1012528D"
        },
        {
          storeNO:"145963",
          storeName:"명랑치킨",
          address:"충청남도 천안시 서북구 성정동 681-9",
          storeScore:"5.0",
          userNickname:"48313",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"검색해보고 주문햇는데 배달주시는분이 정말 친절하고잘행기셨어요@@",
          wish :"false",
          url:"https://d3oxv6xcx9d0j1.cloudfront.net/public/pr/5680/f45222cf-0297-4576-9ebe-875842576b9a.jpg"
        },
        {
          storeNO:"237922",
          storeName:"순수치킨",
          address:"서울특별시 동대문구 회기동 60-190",
          storeScore:"3.5",
          userNickname:"328956",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:"반반순살로 시켰는데 후라이드도 양념찍어먹을 소스를 더 줬으면 하는아쉬움.",
          wish :"false",
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuK95pz6zOZjFMOjENBSA7txZX2yBg2Ww6SA&usqp=CAU"
        },
        {
          storeNO:"262143",
          storeName:"아웃닭",
          address:"경기도 성남시 분당구 서현동 247-1",
          storeScore:"4.0",
          userNickname:"190766",
          userProfile:"https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
          content:" 아웃백 인테리어 컨셉, 오픈한 지 얼마 안되서 그런지 이벤트 많아요.",
          wish :"false",
          url:"https://t1.daumcdn.net/cfile/tistory/997C8F345AC84B620C"
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
      { i%2 === 0 &&
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
      }
      { i%2 === 1 &&
        <JMTContentListCard2
          storeNO={store.storeNO}
          storeName={store.storeName}
          address={store.address}
          storeScore={store.storeScore}
          userNickname={store.userNickname}
          userProfile={store.userProfile}
          content={store.content}
          wish ={store.wish}
          url={store.url}>
        </JMTContentListCard2>
      }  
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


JMT = connect(mapStateToProps, null)(JMT);
export default JMT;
