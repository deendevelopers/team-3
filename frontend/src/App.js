import React, { Component } from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled";
import "./App.css";

import Header from "./components/Header";

const Button = styled.button`
  background-color: blue;
  padding: 10px 20px;
  width: 300px;
  height: 50px;
  border-radius: 150px;
  border: none;
  margin-top: 64px;
  color: white;
  font-size: 18px;
`;

class App extends Component {
  onSetupClick = () => {
    // todo: auth
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Button onClick={this.onSetupClick}>Setup</Button>
      </div>
    );
  }
}

export default App;
