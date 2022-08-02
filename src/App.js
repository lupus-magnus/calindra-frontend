import { ThemeProvider } from "styled-components";

import { FirstSection, Navbar } from "./components";

import { GlobalStyle, theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <FirstSection />
    </ThemeProvider>
  );
}

export default App;
