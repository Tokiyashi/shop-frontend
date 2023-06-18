import React from "react";
import Catalog from "./Catalog";
import { extendTheme, ThemeProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Container from "./styles/Container";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#a5fa7a",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:itemId" element={<Catalog />} />
        <Route path="/" element={<Catalog />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
