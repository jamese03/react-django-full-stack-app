import React from "react";

import { HeaderContainer } from "../components/header/HeaderContainer";
import { Dashboard } from "../components/user/Dashboard/Dashboard";
import { Typography, Container } from "@material-ui/core";
import { IAppProps } from "./AppContainer";

const App = ({classes}: IAppProps) => {
    return (
        <>
            <HeaderContainer />
            <div className={classes.contentContainer}>
                <Typography>
                    This will be an example of a CRUD application.
                </Typography>
                <Typography>
                    Frontend Technologies: React / Typescript / Mobx State Tree
                    <br />
                    Backend Technologies: Python / Django
                </Typography>
                <Dashboard />
            </div>
        </>
    );
};

export default App;
