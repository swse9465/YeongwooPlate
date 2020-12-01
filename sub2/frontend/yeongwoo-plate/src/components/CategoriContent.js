import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/Main.css";

const CategoriContent = ({ contentName, url}) => (
    <Link to="/Category">
        <div style={{width:"270px",textAlign:"center"}}>
            <img style={{width:"150px",height:"150px"}} src={url} />
            <h2 style={{fontWeight:"bold", fontSize:"25px", color:"#ffc983"}}>{contentName}</h2>
        </div>
    </Link>
);

CategoriContent.propTypes = {
contentName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

// let mapStateToProps = (state) => {
//     const { stores, isLoading, error } = state.stores;
//     return { stores, isLoading, error };
//   };
  
//   CategoriContent = connect(mapStateToProps, null)(CategoriContent);

export default CategoriContent;
