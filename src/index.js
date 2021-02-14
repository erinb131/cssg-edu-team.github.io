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
            <Route path="/" exact component={() => <App />} />
            <Route path="/about" exact component={() => <App2 />} />
            <Route path="/resume" exact component={() => <App3 />} />
      <Footer />
    </BrowserRouter>
  </div>
);

// const About = () => (
//   <div class="main">
//     <BrowserRouter>
//       <Header />
//       <div>
//         <Route path="/about" component={App2} />
//       </div>
//       <Footer />
//     </BrowserRouter>
//   </div>
// );

ReactDOM.render(<Index />, document.getElementById("root"));
// ReactDOM.render(<About />, document.getElementById("root2"));

