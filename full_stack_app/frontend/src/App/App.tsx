import { Paper, Typography } from '@material-ui/core';
import React from 'react';

import { HeaderContainer } from '../components/header/HeaderContainer';
import { FormContainer } from '../components/user/Form/FormContainer';
import { UserListContainer } from '../components/user/UserList/UserListContainer';
import { IAppProps } from './AppContainer';
import { AddNewUserButtonContainer } from '../components/addNewUserButton/AddNewUserButtonContainer';
import { Dashboard } from '../components/dashboard/Dashboard';

const App = ({ classes }: IAppProps) => {
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
                <UserListContainer />
                <Dashboard />
            </div>
        </>
    );
};

export default App;
