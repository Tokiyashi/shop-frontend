import React from "react";
import CatalogPage from "./CatalogPage";
import { extendTheme, ThemeProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";
import DeliveryInfo from "./DeliveryInfo";
import LoginPage from "./LoginPage";
import { useUser } from "../utils/store/user";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#a7d1f3",
    },
    secondary: {
      500: "#F8F9Fd",
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {},
      },
    },
  },
});

function App() {
  const user = useUser((state) => state.user);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/delivery-info" element={<DeliveryInfo />} />
        <Route path="/*" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
