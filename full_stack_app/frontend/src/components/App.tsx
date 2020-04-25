import React from "react";

import { HeaderContainer } from "./header/HeaderContainer";
import { Dashboard } from "./user/Dashboard/Dashboard";
import { Typography, Container } from "@material-ui/core";

const App = () => {
    return (
        <>
            <HeaderContainer />
            <Container maxWidth={"md"}>
                <Typography>
                    This will be an example of a CRUD application.
                </Typography>
                <Typography>
                    Frontend Technologies: React / Typescript / Mobx State Tree
                    <br />
                    Backend Technologies: Python / Django
                </Typography>
                <Dashboard />
            </Container>
        </>
    );
};

export default App;
