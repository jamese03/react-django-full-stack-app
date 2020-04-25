import React from 'react';

import { LayoutContainer } from './layout/LayoutContainer';
import { Dashboard } from './user/Dashboard/Dashboard';
import { Typography } from '@material-ui/core';

const App = () => {
    return (
        <>
         <LayoutContainer />
         <Typography>
             This will be an example of a CRUD application. 
        </Typography>
        <Typography>
            Frontend Technologies: React / Typescript / Mobx State Tree
            <br/>
            Backend Technologies: Python / Django 
        </Typography>
         <Dashboard />
        </>
    );
};

export default App;
