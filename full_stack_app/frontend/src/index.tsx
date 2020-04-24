import React from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";
import App from "./App";

const rootEl = document.getElementById("root");

render(<App />, rootEl);

//@ts-ignore
if (module.hot) {
//@ts-ignore
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        render(<NextApp />, rootEl);
    });
}
