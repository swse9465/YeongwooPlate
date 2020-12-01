import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <FooterLink to="/mypage">my page</FooterLink>
      </ListItem>
      <ListItem>
        <FooterLink to="/">about us</FooterLink>
      </ListItem>
    </List>
    <Copyright>Yoengwoo Plate {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
