//import Banner from '../../AppBanner/src/components/banner'
import ProductList from "./components/NavBar";
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Root(props) {
  const THEME = createTheme({
    typography: {
      fontFamily: `"Open Sans", "sans-serif", "Tahoma", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });
  return (
    // <BrowserRouter>
      // <ThemeProvider theme={THEME}>
        <ProductList props={props} />
      // </ThemeProvider>
    // </BrowserRouter>
  );
}
