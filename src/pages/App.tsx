import React from "react";
import CatalogPage from "./CatalogPage";
import { extendTheme, ThemeProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#8e33fd",
    },
    secondary: {
      500: "#F8F9Fd",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/products" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
