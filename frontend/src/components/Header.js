import React from "react";
import styled from "@emotion/styled";

const Hero = styled.div`
  background-color: blue;
  color: white;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => (
  <Hero>
    <h1>Salah Sync</h1>
  </Hero>
);

export default Header;
