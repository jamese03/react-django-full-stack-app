import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const rootEl = document.getElementById("root");

render(<App />, rootEl);


// todo figure out hot reload? 
// //@ts-ignore
// if (module.hot) {
// //@ts-ignore
//     module.hot.accept("./App", () => {
//         const NextApp = require("./App").default;
//         render(<NextApp />, rootEl);
//     });
// }
