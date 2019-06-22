/*eslint no-undef: 0*/

import React, { Component } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';

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
  cursor: pointer;
`;

class App extends Component {
  authInit = () => {
    try {
      gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope:
          'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events'
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  onSetupClick = async () => {
    try {
      const googleAuth = await gapi.auth2.getAuthInstance();
      googleAuth.signIn();
    } catch (e) {
      throw new Error(e);
    }
  };

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.onload = () => gapi.load('auth2', this.authInit);
    document.body.appendChild(script);
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
