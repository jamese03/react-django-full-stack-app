import { Typography } from '@material-ui/core';
import React from 'react';
import { Route } from 'react-router';

import { HeaderContainer } from '../components/header/HeaderContainer';
import { EditUser } from '../components/user/editUser/editUser';
import { UserListContainer } from '../components/user/userList/UserListContainer';
import { IAppProps } from './AppContainer';

const App = ({ classes }: IAppProps) => {
    return (
        <>
            <HeaderContainer />
            <div className={classes.contentContainer}>
                <Typography>
                    This will be an example of a CRUD application.
                </Typography>
                <Typography>
                    Frontend Technologies: Typescript / React / Mobx State Tree
                    <br />
                    Backend Technologies: Python / Django
                </Typography>
                <Route component={UserListContainer} path={"/"} exact={true} />
                <Route component={EditUser} path={"/:userID/edit"} />
            </div>
        </>
    );
};

export default App;
