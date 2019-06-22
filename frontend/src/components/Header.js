import React from 'react';
import styled from '@emotion/styled';

const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 28em;
  padding: 32px;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-family: 'anton', sans-serif;
    text-transform: uppercase;
    font-size: 6em;
    letter-spacing: 0.025em;
    line-height: 1;
  }

  h2 {
    font-size: 2.25rem;
    color: #ab98f5;
    letter-spacing: -0.01em;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.66;
    color: #2e3036;
  }
`;

const Header = ({ children, ...props }) => <Hero>{children}</Hero>;

export default Header;
