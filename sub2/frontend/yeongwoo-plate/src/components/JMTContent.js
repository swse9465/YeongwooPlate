import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/Main.css";

const JMTContent = ({ contentName, contentNO, url }) => (
  <Link to={`/JMT/${contentNO}`}>
    <span className="content">
      <img className="content-img" src={url} />
      <div className="content-mentbox">
        <h2 className="content-ment">{contentName}</h2>
      </div>
    </span>
  </Link>
);

JMTContent.propTypes = {
  contentName: PropTypes.string.isRequired,
  contentNO: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default JMTContent;
