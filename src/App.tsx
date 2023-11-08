import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Home } from "./pages/home";
import { Routing } from "./routes";
import { Query } from "./pages/react-query";
import { NavBar } from "./components/navBar";
import { Router } from "react-router";

function App() {
  return (
    <>
    
      <Routing />
    </>
  );
}

export default observer(App);
