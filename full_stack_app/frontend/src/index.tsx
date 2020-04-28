import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import { HashRouter as Router, Route } from "react-router-dom";
import { IRootStore, RootStore } from "./mobxmodels/rootStore";
import { Provider } from "mobx-react";
import { AxiosWebClient } from "./axios/AxiosWebClient";
import { IStoreEnv } from "./mobxmodels";
import { AppContainer } from "./App/AppContainer";
import makeInspectable from "mobx-devtools-mst";
import { EditUser } from "./components/user/editUser/editUser";


const rootEl = document.getElementById("root");

const rootStoreEnv: IStoreEnv = { Axios: AxiosWebClient };
const rootStore: IRootStore = RootStore.create({}, rootStoreEnv);
const isDev = process.env.NODE_ENV === "development";

if (isDev) {
    makeInspectable(rootStore);
}

render(
    <Provider {...rootStore}>
        <ThemeProvider theme={theme}>
            <Router>
                <AppContainer />
            </Router>
        </ThemeProvider>
    </Provider>,
    rootEl
);

