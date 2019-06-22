/*eslint no-undef: 0*/

import React, { Component } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Button from './components/Button';

const MiddleOfPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
      <MiddleOfPage className="stack">
        <Header>
          <h1>Salah Sync.</h1>
          <h2>Set up your calendar</h2>
          <Button onClick={this.onSetupClick}>Setup</Button>
        </Header>
      </MiddleOfPage>
    );
  }
}

export default App;
