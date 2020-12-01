import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/Main.css";

const BigDataContent = ({ url, contentName, score, location, category, storeNo}) => (
    <Link to={`/detailStore/${storeNo}`}>
        <div style={{width:"420px", backgroundColor:"#FAFAFA", position:"relative", textAlign:"center"}}>
            <img style={{width:"390px", height:"240px"}} src={url} />
            <div style={{width:"390px", textAlign:"left", marginLeft:"25px",marginTop:"7px"}}>
                <h2 style={{color:"#4d4d4d", fontSize:"24px"}}>{contentName} <strong style={{color:"#ffa500",fontWeight:"bold"}}> {score}</strong></h2>
                <h2 style={{color:"#737373", fontSize:"18px",marginTop:"7px"}}>{location} - {category}</h2>
            </div>
        </div>
    </Link>
);

BigDataContent.propTypes = {
    url: PropTypes.string.isRequired,
    contentName: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    storeNo: PropTypes.string.isRequired
};


export default BigDataContent;
