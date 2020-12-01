import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid, Image,Icon } from 'semantic-ui-react'
import styled from "styled-components";

const Wrapper = styled.div`
    position:relative;
    text-align:left;
    left:-20px; 
`;

const UserDiv = styled.div`
    position: absolute;
    left:0px; 
    top:90px;
`;

const StoreDiv = styled.div`
    position: absolute;
    left:0px; 
    top:10px;
`;

const UserNicknameStrong = styled.strong`
    font-size:18px; 
    font-weight:bold;  
    text-align:left; 
`;
const StoreNameDiv=styled.h2`
    font-size:30px;
    color:#ffa500;
`;
const StoreName = styled.h2`
    font-size:30px;
    font-weight:bold;  
    float:left;
    margin-top:50px;
    margin-right:10px;
    max-width:390px;

    display:inline-block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
`;


const Ment = styled.h2`
    font-size:16px;
    position:absolute;
    top:3px;
    left:40px;
    width:480px;
    line-height:30px;
    display:inline-block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:normal;
    line-height:1.3;
    height:3.9em;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;

`;


const JMTContentListCard1 = ({storeNO,storeName,address,storeScore,userNickname,userProfile,content,url,wish}) => (
    <div style={{marginBottom:"50px", width:"950px"}}>
    <Grid>
        <Grid.Row>

            <Grid.Column width={6}>
            {/* 링크추가하기 */}
            {/* <Link to="/home"><Image src={url} size='medium'/></Link> */}
            <Link to={`/detailStore/${storeNO}`}><img src={url} style={{width:"300px",height:"200px"}}/></Link>
            </Grid.Column>

            <Grid.Column width={10}>
                <Wrapper>
                    <StoreDiv>
                        {/* 링크추가하기 */}
                        <Link to={`/detailStore/${storeNO}`}><StoreNameDiv> <StoreName>{storeName} </StoreName>{storeScore}</StoreNameDiv></Link>
                        
                        <h2 style={{fontSize:"18px",color:"#6b6b61",marginTop:"10px"}}>{address}</h2>
                        <div style={{position:"absolute",top:"0px",left:"460px", width:"480px",lineHeight:"30px"}}>
                            { wish === "true" &&
                                <Icon fitted name='star' size='big' color='orange'/>
                            } 
                            { wish === "false" &&
                                <Icon fitted name='star outline' size='big' color='orange'/>
                            }
                            <h2 style={{fontSize:"10px",color:"#6b6b61",marginTop:"-2px", marginLeft:"-3px"}}>가고싶다</h2>
                        </div>
                    </StoreDiv> 
                    <UserDiv>
                        <div style={{position:"relative",textAlign:"left"}}>
                            <Image src={userProfile} size='mini' circular />
                            <Ment> <UserNicknameStrong> {userNickname} </UserNicknameStrong> {content}</Ment> 
                        </div>
                    </UserDiv>
                    {/* 링크추가하기 */}
                    <div style={{position:"absolute",top:"170px",textAlign:"right", width:"500px"}}>
                        <Link to={`/detailStore/${storeNO}`} style={{fontSize:"16px",fontWeight:"bold", color:"#6b6b61"}}>{storeName} 더보기...</Link>
                    </div>
                    
                </Wrapper>
            </Grid.Column>

        </Grid.Row>
    </Grid>
    </div>
);
//'red' 'orange' 'yellow' 'olive' 'green' 'teal' 'blue' 'violet' 'purple' 'pink' 'brown' 'grey'

JMTContentListCard1.propTypes = {
    storeNO:PropTypes.string.isRequired,
    storeName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    storeScore: PropTypes.string.isRequired,
    userNickname: PropTypes.string.isRequired,
    userProfile: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    wish:PropTypes.string.isRequired
};

export default JMTContentListCard1;
