import React from "react";
import "antd/dist/antd.css";
import { List, Card } from "antd";
import { Rating } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 3px;
  &:hover {
    color: ${(props) => props.theme.orangeColor};
  }
`;

export const RatingExampleRating = () => (
  <Rating size="huge" style={{ display: "table-cell", paddingLeft: "40px" }} />
);

export default (src) => {
  const { Meta } = Card;
  return (
    <>
      <style>
        {`.active.icon {color: orange !important}`}
        {`.icon.selected {color: orange !important}`}
      </style>
      <List
        dataSource={src.src}
        renderItem={(item) => (
          <List.Item>
            <ELink to={`/detailStore/${item.no}`}>
              <Meta
                style={{ display: "table-cell" }}
                avatar={
                  <img
                    width="70px"
                    height="70px"
                    margin-right="10px"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjFfMTk5%2FMDAxNTk3OTk1MDI5NTM0.fyLE_T5CCzPrE8oYFINTLXsXgOLsVxDOUxPGtF84u3Ag.sZH_M0hhdST7CVJEyqLVrXzRtQb-CYvAag92w9QffNEg.JPEG.yeonjae1993%2FIMG_2181.jpg&type=sc960_832"
                  />
                }
                title={item.name}
                description={item.addr}
              />
            </ELink>
            <RatingExampleRating></RatingExampleRating>
          </List.Item>
        )}
      />
    </>
  );
};
