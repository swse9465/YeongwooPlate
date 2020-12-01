import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getSize = size => {
  let number;
  if (size === "sm") {
    number = 40;
  } else if (size === "md") {
    number = 90;
  } else if (size === "lg") {
    number = 100;
  } else if (size === "Profile") {
    return `
          width:150px;
          height:150px;
          @media only screen and (max-width:600px) {
            width:25vw;
            max-width:140px;
            min-width:100px;
            height:25vw;
            max-height:140px;
            min-height:100px;
          }
          `
  }
  return `
        width:${number}px;
        height:${number}px;
        `;
};

const Container = styled.div`
  background-image:url(${props => props.url});
  background-size:cover;
  background-position:center center;
  border-radius:100%;
  border: 1px solid ${(props) => props.theme.livingCoral};
  margin: ${props => props.margin};
  ${props => getSize(props.size)}
`;

const Avatar = ({ size = "sm", url, className, margin="auto" }) => (
  <Container className={className} size={size} url={url} margin={margin} />
);

Avatar.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  url: PropTypes.string.isRequired
};

export default Avatar;
