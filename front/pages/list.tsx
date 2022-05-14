import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../common/theme';
import listStyled from '../styles/listStyled.js';

export default function List() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <listStyled.TestBox>ㅇㅇㅇㅇ</listStyled.TestBox>
      </ThemeProvider>
    </>
  );
}
