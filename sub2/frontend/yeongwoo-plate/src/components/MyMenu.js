import React from "react";
import "../style/custom.css";
import { Icon } from "semantic-ui-react";
import { Popover, Tabs } from "antd";
import LoginModal from "./LoginModal";
import Card from "./Card";
import { Cookies } from "react-cookie";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const cookies = new Cookies();
export const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback} centered>
    <TabPane tab="최근 본 맛집" key="1" style={{ display: "table" }}>
      <Card src={cookies.get("store")}></Card>
    </TabPane>
    <TabPane tab="찜목록" key="2" style={{ display: "table" }}>
      텅!
    </TabPane>
  </Tabs>
);

class MyMenu extends React.Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };
  componentDidUpdate(e) {
    let body = document.getElementsByTagName("body");
    if (this.handleVisibleChange) {
      if (this.state.visible) {
        body[0].classList.add("hidden");
        // body[0].classList.add("mask");
      } else {
        body[0].classList.remove("hidden");
        // body[0].classList.remove("mask");
      }
    }
  }

  render() {
    return (
      <>
        <style>
          {`.hidden {height:100%; min-height:100%; overflow:hidden !important; touch-action:none;}`}
          {/* {`.mask {  position:fixed; left:0; top:0; z-index:1000; width:100%; height: 100%; background-color:#000;  opacity: 0.5;}`} */}
        </style>
        <Popover
          content={
            <a onClick={this.hide}>
              <LoginModal />
            </a>
          }
          title={Demo}
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          placement="bottomRight"
        >
          <Icon color="orange" circular name="user" size="large" />
        </Popover>
      </>
    );
  }
}

export default MyMenu;
