import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Icon, Modal, Dropdown } from "semantic-ui-react";
import "../style/custom.css";
import { Button, Radio, Row, Col } from "antd";
// 나중에 필터 api 연결하고 나면 지역은 맵으로 처리
const Text = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.orangeColor};
`;
const AreaLink = styled.a`
  &:hover {
    color: ${(props) => props.theme.orangeColor};
  }
`;
const AreaText = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.darkGreyColor};
  paddig-bottom: 10px;
  border-bottom: 1px;
`;
const TextBtn = styled.p`
  font-size: 22px;
  color: white;
  margin: 10px;
`;
const filterOptions = [
  { label: "평점순", value: "1" },
  { label: "리뷰순", value: "2" },
  { label: "인기순", value: "3" },
];

export class ButtonExampleToggle extends Component {
  state = {
    value3: "평점순",
  };

  onChange3 = (e) => {
    console.log("radio3 checked", e.target);
    this.setState({
      value3: e.target.value,
    });
  };

  render() {
    const { value3 } = this.state;
    return (
      <Radio.Group
        options={filterOptions}
        onChange={this.onChange3}
        value={value3}
        optionType="button"
        size="large"
      />
    );
  }
}
const a = document.getElementsByClassName("areatext");
function ScrollingModal() {
  const [open, setOpen] = React.useState(false);
  const afunc = (e) => {
    let tmp = e.target.outerHTML;
    tmp = tmp.split(" ")[4];
    tmp = tmp.split('"')[1];
    let aText = document.getElementsByName(tmp);
    for (let i = 0; i < a.length; i++) {
      a[i].setAttribute("style", "color:grey;");
    }
    aText[0].style.color = "#ffa684";
  };
  


  const options = [
    { key: 1, text: "부산", value: 1, className: "options" },
    { key: 2, text: "제주", value: 2, className: "options" },
    { key: 3, text: "대전", value: 3, className: "options" },
  ];

  const active = (e) => {
    for (let i = 0; i < a.length; i++) {
      a[i].setAttribute("style", "color:grey;");
    }
  };
  return (
    <>
      <style>
        {`.ui.divided.six.column.grid {
           justify-content: center;
           margin-bottom: 3px;
        }`}
        {`.item .text {
          font-size:14px;
          color: grey;
        }`}
      </style>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <a>
            <Icon name="options" color="grey" size="large" id="filter"></Icon>
          </a>
        }
        style={{
          height: `auto`,
          position: `static`,
        }}
      >
        <Modal.Content>
          <Modal.Description>
            <Text>검색 필터</Text>
            <br />
            <ButtonExampleToggle></ButtonExampleToggle>
            <hr></hr>
            <Text>지역</Text>
            <br />

            <Grid columns={6} divided>
              <Grid.Row id="areaRow">
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                    <AreaText className="areatext" name="1">
                      서울-강남
                    </AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                    <AreaText className="areatext" name="2">
                      서울-강북
                    </AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                    <AreaText className="areatext" name="3">
                      경기도
                    </AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                    <AreaText className="areatext" name="4">
                      인천
                    </AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                    <AreaText className="areatext" name="5">
                      대구
                    </AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink>
                    <Dropdown
                      text={<AreaText>더보기</AreaText>}
                      search
                      options={options}
                      onChange={active}
                    />
                  </AreaLink>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <br></br>
            <Grid columns={4} divided>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                    <AreaText className="areatext" name="6">
                    가로수길
                    </AreaText>
                  </AreaLink> 
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="7">강남역</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="8">강동구</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="9">관악구</AreaText>
                  </AreaLink>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="10">교대/서초</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="11">구로구</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="12">금천구</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="13">노현동</AreaText>
                  </AreaLink>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="14">대치동</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="15">도곡동</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="16">동작/사당</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="17">등촌/강서</AreaText>
                  </AreaLink>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="18">방이동</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="19">상성동</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="20">여의도</AreaText>
                  </AreaLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <AreaLink onClick={afunc}>
                  <AreaText className="areatext" name="21">역삼/선릉</AreaText>
                  </AreaLink>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
        <Row>
          <Col
            span={12}
            style={{
              backgroundColor: "#E2E2E2",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <a>
              <TextBtn onClick={() => setOpen(false)}>취소</TextBtn>
            </a>
          </Col>
          <Col
            span={12}
            style={{
              backgroundColor: "#ED7014",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <a>
              <TextBtn onClick={() => setOpen(false)}>적용</TextBtn>
            </a>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default ScrollingModal;
