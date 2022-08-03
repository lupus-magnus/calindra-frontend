import { ThemeProvider } from "styled-components";

import { FirstSection, Navbar, SecondSection } from "./components";

import { GlobalStyle, theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <main>
        <FirstSection />
        <SecondSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
