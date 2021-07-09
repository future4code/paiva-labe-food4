import { ThemeProvider } from "@material-ui/core/styles";
import { GlobalState } from "./global/GlobalState";
import React from "react";
import theme from "./constants/theme";
import Router from "./Routes/Router";
import GlobalStyle from "./globalStyles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
};

export default App;
