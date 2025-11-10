import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
=======
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
>>>>>>> d0ef3050003b1c73abb1f7cf099cb85ec9630d7c
import theme from "./app/MaterialTheme";
import "./css/index.css";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
<<<<<<< HEAD
        <Router>
          <App />
        </Router>
=======
        <App />
>>>>>>> d0ef3050003b1c73abb1f7cf099cb85ec9630d7c
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
