import React from 'react'
import { UserList } from '../UserList/UserList'
import { FormContainer } from '../Form/FormContainer'

export const Dashboard = () => {
    return (
        <div>
            <FormContainer />
            <UserList />
        </div>
    )
}
