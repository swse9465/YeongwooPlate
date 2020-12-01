import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { Icon,Feed} from "semantic-ui-react";
import { Rate, Row, Col } from 'antd';

const CFatText = styled.span`
  color:${(props) => props.theme.orangeColor};
  font-weight: 600;
  font-size: 30px;
`;
const Card = styled.div`
  background-color:${(props) => props.theme.whiteBox};
  display:flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width:100%;
  margin:10px auto;
  cursor: pointer;
  justify-content:space-between;
  &:hover {
    background: #E2E2E2;
  }
`;

const EAvatar = styled(Avatar)`
  margin-right: 10px;
  margin-left:10px;

`;

const ELink = styled(Link)`
  color: inherit;
  margin: 5px 10px;
`;

const Temp = styled.p`
  margin: 5px 10px;
`
const FatText = styled.span`
  font-weight: 600;
  font-size: 30px;
`;
const SText = styled.span`
  font-weight: 600;
  font-size: 15px;
  margin: 1%;
`;

const Toggle = styled.span`
  color:wheat;
  &:hover {
    color: #ffa684;
  }
`;
const Toggle2 = styled.span`
  color:#ff8b5c;
  &:hover {
    color: #ffa684;
  }
`;
const likeStyles = {
  color:"wheat"
};

const UserCard = ({ id, isLike, url, content,nickname, likeCnt,score }) => {

  const toggleLike = () => {
    if (isLike === true) {
      isLike=false;
      likeCnt-=1;
      console.log('싫어요!');
    } else {
      isLike=true;
      likeCnt+=1;
      console.log('좋아요!');
    }
  };
  return (<Card>
    <Feed style={{  width: "100%"}}>
    <Feed.Event >
      <Feed.Label image={url} />
      <Feed.Content style={{  backgroundColor:"inherit",margin: "2%"}}>
        <Feed.Summary>
            <Row>
              <Col flex={1} style={{textAlignLast: "left"}}>
                {nickname}
              </Col>
              <Col flex={1} style={{textAlignLast: "right"}}>
                  <Rate disabled defaultValue={score} style={{color:"#ffa684"}} />
              </Col>
            </Row>
        </Feed.Summary>
        <Feed.Extra text style={{maxWidth:"100%"}}>
          {content}
        </Feed.Extra>
        {/* {

                  <Feed.Meta>
                  <Feed.Extra images>
                    <a>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5UjSYV7SOJ_SiNGI0HTDlYreM125KD0-iNg&usqp=CAU' />
                    </a>
                    <a>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwASStaYZPPv8Og9HLsSdLiN8tC7YaSnSiwg&usqp=CAU' />
                    </a>
                  </Feed.Extra>
                  </Feed.Meta>
        } */}


      </Feed.Content>
    </Feed.Event>
    <div style ={{textAlign:"right"}}>
    <ELink to={`/detailReview/${id}`}><SText>자세히 보기</SText></ELink>
    </div>
    </Feed>
    
  </Card>);
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isLike: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

export default UserCard;
