import React from "react";
import ReactDOM from "react-dom";
import Radio from 'antd/lib/radio';
import message from 'antd/lib/message';
import 'antd/lib/radio/style/css';
import 'antd/lib/message/style/css';
import FloatButton from "./floatButton/floatButton";
import homePNG from "../assets/home.png";
import forkPNG from "../assets/fork.png";
import messagePNG from "../assets/message.png";
import cameraPNG from "../assets/camera.png";
import opinionPNG from "../assets/opinion.png";
import photoPNG from "../assets/photo.png";
import shoppingPNG from "../assets/shopping.png";
const RadioGroup = Radio.Group;
const flyOutDir = [
  { label: "环绕(默认)", value: "sur" },
  { label: "向左", value: "left" },
  { label: "向右", value: "right" },
  { label: "向上", value: "up" },
  { label: "向下", value: "down" },
  { label: "左和上", value: "LT" },
  { label: "右和上", value: "RT" }
]

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      value: "sur"
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    event.preventDefault()
    this.setState({
      open: !this.state.open
    })
  }

  onChange(e){
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (<div>
      <div style={{
        marginLeft: 48,
        marginTop: 48
      }}>
        <RadioGroup onChange={(e)=>this.onChange(e)} value={this.state.value}>
          {
            flyOutDir.map((values, index)=><Radio value={values.value} key={index}>{values.label}</Radio>)
          }
        </RadioGroup>
      </div>
      <FloatButton
        // top={50}
        // left={50}
        // ChildButtonToMainButtonSpacingDistance={80}
        // SeparationAngle={40}
        mode={this.state.value}
        mainButtonImgSrc={homePNG}
        closeImgSrc={forkPNG}
        childrenButtonData={
          [
            { imgSrc: messagePNG, onClick: (e) => message.info('i am message'), imgAlt: "1", bgColor: "#eee" },
            { imgSrc: cameraPNG, onClick: (e) => message.info('i am camera'), imgAlt: "2", bgColor: "#eee" },
            { imgSrc: photoPNG, onClick: (e) => message.info('i am photo'), imgAlt: "3", bgColor: "#eee" },
            { imgSrc: opinionPNG, onClick: (e) => message.info('i am opinion'), imgAlt: "4", bgColor: "#eee" },
            { imgSrc: shoppingPNG, onClick: (e) => message.info('i am shopping'), imgAlt: "5", bgColor: "#eee" },
          ]
        }
        buttonSize={60}
        backgroundColor={"#eee"}
        isOpen={this.state.open}
        onClick={(e) => this.toggle(e)}
      />
    </div>)

  }
}

ReactDOM.render(<App />, document.getElementById("root"));