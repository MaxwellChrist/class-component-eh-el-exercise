import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someValue: "",
      secondValue: "Click me to get the same text you typed above!"
    };
  }
  singleClickHandler = () => alert("Single Click!");

  doubleClickHandler = () => alert("Double Clicked!");

  mouseEnterHandler = () => alert("Mouse Enterd");

  changeHandler = (event) => {
    this.setState({ someValue: event.target.value });
  };

  secondChangeHandler = (event) => {
    this.setState({ secondValue: this.state.someValue });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello Handlers</h1>
        <h2>Lets build out some handler functions.</h2>
        <button onClick={this.singleClickHandler}>Click Handler Demo</button>
        <button onDoubleClick={this.doubleClickHandler}>
          Double Click Handler
        </button>
        <div onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
        <input onChange={this.changeHandler} placeholder="Change my input" />
        <h1>{this.state.someValue}</h1>
        <button onClick={this.secondChangeHandler}>
          Click this button to put the value of the displayed text into another
          property!
        </button>
        <h2>{this.state.secondValue}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
