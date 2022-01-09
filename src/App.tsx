import React from "react";
import ReactDOM from "react-dom";
import * as rdd from "react-device-detect";

import "./index.css";

function App() {
  return (
    <main className="container">
      <h1>Hello Cypress</h1>
      <div>Name: home</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <div>Hello From {rdd.browserName}</div>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
