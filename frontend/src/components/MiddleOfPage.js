import React from 'react';
import styled from '@emotion/styled';

const MiddleOfPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default ({ children, ...props }) => (
  <MiddleOfPage className={'stack'}>{children}</MiddleOfPage>
);
