import React, { useEffect, useCallback } from "react";
import StoresList from "../components/StoresList";
import { withRouter } from "react-router-dom";
import FlashMessage from "../components/FlashMessage";
import { Grid } from "semantic-ui-react";
import JMTContent from "../components/JMTContent";
import ScrollingModal from "../components/ScrollingModal";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 새로고침해도 결과가 사라지지 않도록 하기(storage이용)
// storage x, stores 값 o
const Text = styled.p`
  font-size: 25px;
  display: inline;
  color: ${(props) => props.theme.orangeColor};
`;
const FilterDiv = styled.div`
  padding-top: 5px;
  float: right;
  margin-right: -60px;
`;
let page = 1;
let data = [];
let end = false;
let searchValue = "";
let start = false;
let firstPage = true;
export default withRouter(
  ({
    error,
    onSearchStores,
    stores,
    isLoading,
    match: {
      params: { value },
    },
  }) => {
    if (value !== searchValue) {
      page = 1;
      data = [];
      firstPage = true;
    }
    if (isLoading) {
      end = true;
    }
    if (!stores.results) {
      const params = { name: value, page: 1, append: false };
      onSearchStores(params);
      start = true;
    }
    if (!isLoading && end) {
      searchValue = value;
      let moreData = [];
      moreData = stores.results;
      if (moreData.length > 0 && page !== 1) {
        data = data.concat(moreData);
      } else if (moreData.length > 0 && page === 1 && firstPage) {
        data = data.concat(moreData);
        firstPage = false;
      } else {
        page--;
      }
      if (page === 0) {
        page = 1;
      }
      end = false;
      start = false;
    }
    const scrollHandler = useCallback(() => {
      let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      let scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      let clientHeight = document.documentElement.clientHeight;

      if (
        scrollTop + 10 >= scrollHeight - clientHeight &&
        data.length < stores.count &&
        !start
      ) {
        const params = {
          name: value,
          page: ++page,
          append: false,
        };
        onSearchStores(params);
        start = true;
      }
    });

    useEffect(() => {
      window.addEventListener("scroll", scrollHandler, true);
      return () => window.removeEventListener("scroll", scrollHandler, true);
    }, [scrollHandler]);

    if (isLoading && !data) {
      return <div>Loading...</div>;
    }
    // 클래스가 매번 바뀌는 건가?
    return (
      <>
        <style>
          {`.right.floated.four.wide.column {
            position: sticky;
            display: inline-block;
            top: 40px;
            height: 80px;
            margin-right: -50px;
        }`}
          {`.darkIamge {
            filter: brightness(70%);
            margin-top: 10px;
        }`}
        </style>
        <Grid>
          <Grid.Row>
            <Grid.Column floated="left" width={10}>
              <div>{error && <FlashMessage message={error} />}</div>
              <div style={{ margin: "0px 0px 0px 20px" }}>
                <Text>"{value}" 검색 결과</Text>
                <FilterDiv>
                  <ScrollingModal />
                </FilterDiv>
              </div>
              <div style={{ margin: "23px -150px 25px 20px" }}>
                <StoresList stores={data} onScroll={scrollHandler} />
              </div>
            </Grid.Column>
            <Grid.Column floated="right" width={4}>
              <div>{error && <FlashMessage message={error} />}</div>
              <Text className="blueText">관련 콘텐츠</Text>
              <br />
              <br />

              <Link to={`/JMT/01`}>
                <span style={{position:"relative"}}>
                  <img style={{width:"290px",height:"170px",filter:"brightness(75%)"}} src="https://i.ytimg.com/vi/iPC2LqphJ9Q/maxresdefault.jpg" />
                  <div style={{position: "absolute",top:"-80px",width:"290px"}}>
                    <h2 style={{color:"rgb(255, 255, 255)",fontSize: "23px",fontWeight:"bold",textAlign:"center"}}>이게 진짜 파스타구나...</h2>
                  </div>
                </span>
              </Link>

              <br />

              <Link to={`/JMT/01`}>
                <span style={{position:"relative"}}>
                  <img style={{width:"290px",height:"170px",filter:"brightness(75%)"}} src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200107_114%2F157839375530249k5j_JPEG%2FB_1XbrNs-ZpAjFZ_D8DZTq5G.jpg&type=sc960_832" />
                  <div style={{position: "absolute",top:"-80px",width:"290px"}}>
                    <h2 style={{color:"rgb(255, 255, 255)",fontSize: "23px",fontWeight:"bold",textAlign:"center"}}>맛있는 커피와 함께</h2>
                  </div>
                </span>
              </Link>

              <br />

              <Link to={`/JMT/01`}>
                <span style={{position:"relative"}}>
                  <img style={{width:"290px",height:"170px",filter:"brightness(75%)"}} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMjBfMjM4%2FMDAxNTgyMTc0MzQzNTgz.HyA2JE1Ie_wQEYWXKg38v2dgLZWwhU6M3M6EiTj9eM0g.uXGKfROHrDxq4vdbo_8n2-55htUbevUr7q5r3D5_4h8g.JPEG.marinehhh%2FIMG_3153.JPG&type=sc960_832" />
                  <div style={{position: "absolute",top:"-80px",width:"290px"}}>
                    <h2 style={{color:"rgb(255, 255, 255)",fontSize: "23px",fontWeight:"bold",textAlign:"center"}}>여기 모르면 초밥 다시 배워</h2>
                  </div>
                </span>
              </Link>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
);
