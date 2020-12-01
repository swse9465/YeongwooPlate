import React, { useState } from "react";
import KaKaoLogin from "react-kakao-login";
import { Modal } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const MainText = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const LoginBtnWrapper = styled.div`
  text-align: center;
`;

// const KaKaoBtn = styled(KaKaoLogin)`
//   padding: 0;
//   width: 190px;
//   height: 44px;
//   line-height: 44px;
//   color: #783c00;
//   background-color: #ffeb00;
//   border: 1px solid transparent;
//   border-radius: 3px;
//   font-size: 16px;
//   font-weight: bold;
//   text-align: center;
//   cursor: pointer;
//   &:hover {
//     box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
//   }
// `;
const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [kakao, setKakao] = useState({ data: "kakao" });
  const responseKaKao = (res) => {
    setKakao({
      data: res,
    });
    if (kakao.data.profile) {
      console.log(kakao.data);
      const id = kakao.data.profile.id;
      const token = kakao.data.response.access_token;
      window.sessionStorage.setItem("id", id);
      window.sessionStorage.setItem("token", token);
      setOpen(false);
    }
  };
  const responseFail = (err) => {
    alert(err);
  };
  return (
    <>
      <Modal
        open={open}
        size="mini"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<LoginBtnWrapper>로그인</LoginBtnWrapper>}
        style={{
          height: `auto`,
          position: `static`,
          textAlign: `center`,
        }}
      >
        <Modal.Content>
          <Wrapper>
            <MainText>Login</MainText>
            <br />
            <p>
              로그인하면 가고 싶은 식당을 <br />
              저장할 수 있어요
            </p>
            <br />
            <KaKaoBtn
              jsKey={"d6ba2c2b0fa20148ee559da0b574a6c2"}
              buttonText="KaKao"
              onSuccess={responseKaKao}
              onFailure={responseFail}
              getProfile={true}
            />
          </Wrapper>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default LoginModal;
