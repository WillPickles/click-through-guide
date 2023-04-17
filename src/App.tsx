import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Container, createTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './app/layout/Header';



function App() {
  const theme = createTheme({
    
  })
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Container>
        <Outlet />

      </Container>
    </ThemeProvider>
  );
}

export default App;
