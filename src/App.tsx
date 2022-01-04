import React from "react";
import ReactDOM from "react-dom";
import * as rdd from "react-device-detect";

import "./index.css";

function App() {
  return (
    <div className="container">
      <div>Name: home</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <div>Hello From {rdd.browserName}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
