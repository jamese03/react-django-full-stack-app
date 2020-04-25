import React from 'react';

import { FormContainer } from '../Form/FormContainer';
import { UserListContainer } from '../UserList/UserListContainer';

export const Dashboard = () => {
    return (
        <div>
            <FormContainer />
            <UserListContainer />
        </div>
    )
}
