import React from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";

import App from "./components/App";
import AppHeader from "./components/AppHeader";

function Root() {
  return (
    <App>
      <AppHeader />
      <Container maxWidth="md" />
    </App>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  rootElement
);
