import React, { Component } from "react";
import "../style/Main.css";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      userlogo_onMouseOver: false,
      mainpage_ment: [
        "인생은 고기서 고기다",
        "오늘은 먹고 다이어트는 내일부터",
        "좋은 음식은 공복인 아침에 먹어야 한다",
        "아무리 먹어도 배는 터지지 않는다",
        "정신들 똑바로 차리고 먹어라",
        "먹고 있는데도 먹고싶다",
      ],
      login_id: "",
      random: parseInt(Math.random() * 6),
      modal1Visible: false,
      modal2Visible: false,
    };
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="box">
        <div className="box-ment">
          <h2>{this.state.mainpage_ment[this.state.random]}</h2>
        </div>
      </div>
    );
  }
}

export default MainHeader;
