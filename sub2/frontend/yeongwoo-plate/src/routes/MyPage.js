import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import StoresList from "../components/StoresList";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${(props) => props.theme.sm}) {
  }
`;

const Header = styled.header`
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 10px auto;
  @media only screen and (max-width: ${(props) => props.theme.sm}) {
    width: 100%;
  }
`;

const UsernameRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  place-content: center;
`;

const Username = styled.span`
  font-size: 25px;
  display: block;
  margin-right: 10px;
  @media only screen and (max-width: ${(props) => props.theme.sm}) {
    font-size: 5vw;
    margin-left: 10px;
  }
`;

const AvatarColumn = styled.div`
  margin: auto;
  @media only screen and (min-width: ${(props) => props.theme.sm}) {
    width: unset;
  }
`;
const Text = styled.p`
  font-size: 14px;
  display: inline;
`;

const RightText = styled.p`
  font-size: 12px;
  display: inline;
  margin-right: 5px;
`;
const Foot = styled.div`
  float: right;
  display: table;
`;
const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 5px;
  text-align: center;
  float: right;
  &:hover {
    color: ${(props) => props.theme.orangeColor};
  }
`;

export default ({ user }) => {
  return (
    <>
      <Wrapper>
        <Helmet>
          <title>뚠뚠 | YP</title>
        </Helmet>
        <Header>
          <AvatarColumn>
            <Avatar
              size="md"
              url={
                "https://image.chosun.com/sitedata/image/202003/18/2020031804241_0.png"
              }
            />
          </AvatarColumn>
          <UsernameRow>
            <Username>뚠뚠</Username>
            <Icon name="pencil alternate" />
          </UsernameRow>
        </Header>
      </Wrapper>
      <div style={{ margin: "14px 20px 25px 20px" }}>
        <Text>작성한 리뷰</Text>
        <ELink to="/mypage">더보기</ELink>
        <hr />
        <StoresList />
        <Text>가고 싶은 맛집</Text>
        <ELink to="/mypage">더보기</ELink>
        <hr />
        <StoresList />
        <br />
        <Foot>
          <RightText>회원탈퇴를 원한다면</RightText>
          <ELink to="/mypage">회원탈퇴</ELink>
        </Foot>
      </div>
    </>
  );
};
