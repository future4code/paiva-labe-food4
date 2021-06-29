import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from './constants/theme';
import Router from './Routes/Router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
