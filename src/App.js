import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from './constants/theme';
import Router from './Routes/Router';
import GlobalStyle from './globalStyles/GlobalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
