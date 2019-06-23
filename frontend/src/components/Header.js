import React from 'react';
import styled from '@emotion/styled';

const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 28em;
  padding: 32px;
  text-align: left;
`;

const Header = ({ children, ...props }) => <Hero>{children}</Hero>;

export default Header;
