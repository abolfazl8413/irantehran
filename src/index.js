import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

// METHOD 1 -- not working
// import { create } from "jss";
// import rtl from "jss-rtl";
// import { StylesProvider, jssPreset } from "@mui/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// METHOD 2 -- it's working
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material";

// Configure METHOD 1 JSS
// const jss = create({
//   plugins: [...jssPreset().plugins, rtl()]
// });

// don't forget to rtl the <body> in public folder
const theme = createTheme({
  direction: "rtl"
});

// METHOD 2 Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin]
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <App />
      </CacheProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
