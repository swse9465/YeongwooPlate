import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import DetailReviewCard from "../components/DetailReviewCard";
import { Carousel } from "antd";
import { fetchDetailReviewDataStarted } from "../actions";
import { connect } from "react-redux";

const Wrapper = styled.div`
  text-align: center;
  margin: 1%;
  max-width: 700px;
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
const DetailImg = styled.img`
  width: 700px;
  height: 700px;
`;
class DetailReview extends Component {
  state = {
    stores: null,
    data: null,
    start: true,
  };
  onDetailReview = (review_id) => {
    this.props.dispatch(fetchDetailReviewDataStarted(review_id));
  };
    render() {
      if(this.state.start){
        const params = { id:this.props.location.pathname.split("/")[2]};
        this.onDetailReview(params);
        this.state.start=false;
      }
      else if (this.props.isLoading||this.props.detailReview.length==0) {
        return <div>Loading...</div>;
      }
      
      return (
        <div style={{ textAlign: "-webkit-center"}}>
        <Wrapper>
          <Carousel autoplay style={{backgroundColor: "#E2E2E2"}}>
            <div>
            <DetailImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5UjSYV7SOJ_SiNGI0HTDlYreM125KD0-iNg&usqp=CAU' />
            </div>
            <div>
              <DetailImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwASStaYZPPv8Og9HLsSdLiN8tC7YaSnSiwg&usqp=CAU" />
            </div>
          </Carousel>
          <DetailDiv>
            <DetailReviewCard
              nickname={this.props.detailReview.user}
              url="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
              content={this.props.detailReview.content}
              likeCnt={this.props.detailReview.like}
              score={this.props.detailReview.score}
            />
          </DetailDiv>
        </Wrapper>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  const { detailReview, isLoading, error } = state.detailReview;
  return { detailReview, isLoading, error };
};

DetailReview = connect(mapStateToProps, null)(DetailReview);

export default DetailReview;
