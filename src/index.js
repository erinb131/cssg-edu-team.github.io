import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";

import "./index.css";

const Index = () => (
  <div class="main">
    <BrowserRouter>
      <Header />
            <Route path="/erinb131" exact component={() => <App />} />
            <Route path="/erinb131/about" exact component={() => <App2 />} />
            <Route path="/erinb131/resume" exact component={() => <App3 />} />
      <Footer />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));