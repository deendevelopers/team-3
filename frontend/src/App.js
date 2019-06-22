/*eslint no-undef: 0*/

import React, { Component } from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled";
import "./App.css";

import Header from "./components/Header";

import gapi from "gapi-client";

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
  onSetupClick = () => {};

  componentDidMount() {
    //On load, called to load the auth2 library and API client library.
    // gapi.load("client:auth2", initClient);
    console.log("hello");
    // Initialize the API client library
    function initClient() {
      gapi.client
        .init({
          clientId: process.env.CLIENT_ID,
          scope:
            "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"
        })
        .then(function() {
          // do stuff with loaded APIs
          console.log("it worked");
        })
        .catch(() => console.log("failed"));
    }
    gapi.load("client:auth2", initClient);
  }

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
