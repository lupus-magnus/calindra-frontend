import { ThemeProvider } from "styled-components";

import { Navbar } from "./components";
import { GlobalStyle, theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
