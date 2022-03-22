import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import App from "components/App";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
