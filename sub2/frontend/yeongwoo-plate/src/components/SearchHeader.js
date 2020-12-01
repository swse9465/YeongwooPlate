import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import useInput from "../hooks/useInput";
import { Logo } from "./Icons";
import { Input } from "semantic-ui-react";
import MyMenu from "./MyMenu";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: auto;
  text-align: center;
  margin-left: 20px;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;
const HeaderSearchColumn = styled.div`
  width: 70%;
  text-align: center;
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
let lastScrollTop = 0;
let mainPageHeaderHeight = 450;
let fixBoxHeight = 100;
// 검색 값을 쿠키로 저장?
export default withRouter(({ onSearchStores, history }) => {
  const search = useInput("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const params = { name: search.value, page: 1, append: false };
    onSearchStores(params);
    history.push(`/search/${search.value}`);
  };

  const scrollHandler = useCallback(() => {
    //요기!

    let header = document.querySelector("#header");
    let nowScrollTop = window.scrollY;

    let bar = document.querySelector("#searchInput");
    let btn = document.querySelector(".ui.orange.icon.button");
    const main = document.getElementById("main");

    // main일 때
    if (main) {
      if (nowScrollTop <= fixBoxHeight) {
        header.style.display = "flex";
        header.classList.remove("show");
        bar.style.display = "none";
        btn.style.display = "none";
      } else if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
        if (nowScrollTop < mainPageHeaderHeight) {
          header.style.display = "flex";
          header.classList.remove("show");
          bar.style.display = "none";
          btn.style.display = "none";
        } else {
          bar.style.display = "flex";
          btn.style.display = "flex";
          header.style.display = "none";
        }
      } else {
        header.style.display = "flex";
        if (nowScrollTop > mainPageHeaderHeight) {
          bar.style.display = "flex";
          btn.style.display = "flex";
          header.classList.add("show");
        } else {
          bar.style.display = "none";
          btn.style.display = "none";
          header.classList.remove("show");
        }
      }
    } else {
      // 아닐 때
      if (nowScrollTop <= fixBoxHeight) {
        header.style.display = "flex";
      } else if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
        header.style.display = "none";
      } else {
        header.style.display = "flex";
        header.classList.add("show");
      }
    }

    lastScrollTop = nowScrollTop;
  });

  const isMain = () => {
    //만약 메인이면 서치헤더의 서치바가 삭제됨 아니면 다시 추가된다
    let nowScrollTop = window.scrollY;
    let header = document.querySelector("#header");
    const main = document.getElementById("main");
    let bar = document.querySelector("#searchInput");
    let btn = document.querySelector(".ui.orange.icon.button");

    header.style.display = "flex";
    if (nowScrollTop <= fixBoxHeight) {
      if (!main) {
        console.log(header);

        header.classList.add("show");
      } else {
        if (nowScrollTop <= mainPageHeaderHeight) {
          bar.style.display = "none";
          btn.style.display = "none";
          header.classList.remove("show");
        } else {
          header.classList.add("show");
          bar.style.display = "flex";
          btn.style.display = "flex";
        }
        header.classList.remove("show");
      }
    }
  };

  useEffect(() => {
    isMain();
    window.addEventListener("scroll", scrollHandler, true);
    return () => window.removeEventListener("scroll", scrollHandler, true);
  }, [scrollHandler]);

  return (
    <>
      <style>
        {`.show {
          background-color: white;
          border-bottom:  1px solid #e6e6e6;
        }`}
      </style>
      <Header onScroll={scrollHandler} id="header">
        <HeaderWrapper>
          <HeaderColumn>
            <HeaderLink to="/">
              <Logo />
            </HeaderLink>
          </HeaderColumn>

          <HeaderSearchColumn>
            <form onSubmit={onSearchSubmit}>
              <Input
                id="searchInput"
                action={{ icon: "search", color: "orange" }}
                placeholder="Search..."
                value={search.value}
                onChange={search.onChange}
                style={{
                  width: "-webkit-fill-available",
                }}
              />
            </form>
          </HeaderSearchColumn>
          <HeaderColumn>
            <MyMenu />
          </HeaderColumn>
        </HeaderWrapper>
      </Header>
    </>
  );
});
