import { ThemeProvider } from "styled-components";

import { FirstSection, Footer, Navbar, SecondSection } from "./components";

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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
