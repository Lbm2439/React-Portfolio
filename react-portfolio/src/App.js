import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import header from "header";
import navbar from "navbar";
import info from "info";
import portfolio from "portfolio";
import resume from "resume";
import contact from "contact";
import socialbar from "socialbar";
import footer from "footer";

import "./App.js";


function App() {
  return (
    <>
  <router>
    <div>
    <div className="mainDiv">
      <header />
      <navbar />

        <aboutme />
        <portfolio />
        <contact />
        <socialbar />

        <div>
        <footer />
        </div>
    </div>
    </div>
    </router>
    </>
  );
}

export default App;
