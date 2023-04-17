import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Container, createTheme, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#e6e6e6"
      }
    }
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
