import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import { HashRouter as Router } from "react-router-dom";

const rootEl = document.getElementById("root");

render(
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>,
    rootEl
);

// todo figure out hot reload?
// //@ts-ignore
// if (module.hot) {
// //@ts-ignore
//     module.hot.accept("./App", () => {
//         const NextApp = require("./App").default;
//         render(<NextApp />, rootEl);
//     });
// }
