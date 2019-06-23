/*eslint no-undef: 0*/

import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Animated } from 'react-animated-css';

import blob from '../public/blob-shape.svg';

import Header from './components/Header';
import Button from './components/Button';
import MiddleOfPage from './components/MiddleOfPage';

const Blob = styled.div`
  width: 600px;
  height: 600px;
  background-image: url(${blob});
  background-size: cover;
`;

class Home extends Component {
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
      <MiddleOfPage>
        <Blob />
        <Header>
          <Animated animationIn="fadeInUp" isVisible={true}>
            <h1>Salah Sync.</h1>
          </Animated>

          <Animated
            animationIn="fadeInUp"
            animationInDelay={450}
            isVisible={true}
          >
            <h2>Set up your calendar</h2>
          </Animated>

          <Animated
            animationIn="fadeInUp"
            animationInDelay={500}
            isVisible={true}
          >
            <p>
              Salah sync allows you to easily block out slots in your calendar
              to reserve them for prayer. Sign up and we’ll take care of the
              rest.
            </p>
          </Animated>

          <Animated
            animationIn="fadeInUp"
            animationInDelay={700}
            isVisible={true}
          >
            <Button onClick={this.onSetupClick}>Setup</Button>
          </Animated>
        </Header>
      </MiddleOfPage>
    );
  }
}

export default Home;