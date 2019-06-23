/*eslint no-undef: 0*/

import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Animated } from 'react-animated-css';
import { navigate } from '@reach/router';

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

const Home = () => {
  const onSetupClick = async () => {
    fetch('https://spicy-bandana.glitch.me/auth-me', {
      method: 'get'
    }).then(async res => {
      const authUrl = (await res.json()).authUrl;
      console.log(authUrl);
      window.location = authUrl;
    });
  };

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
          <h2>Reserve salah time in your calendar</h2>
        </Animated>

        <Animated
          animationIn="fadeInUp"
          animationInDelay={500}
          isVisible={true}
        >
          <p>
            Salah sync allows you to easily block out slots in your calendar to
            reserve them for prayer. Sign up and we’ll take care of the rest.
          </p>
        </Animated>

        <Animated
          animationIn="fadeInUp"
          animationInDelay={700}
          isVisible={true}
        >
          <Button onClick={onSetupClick}>Setup</Button>
        </Animated>
      </Header>
    </MiddleOfPage>
  );
};

export default Home;
