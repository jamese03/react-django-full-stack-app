import React from 'react'
import { Typography } from '@material-ui/core'
import { USER_STORE } from '../../../constants/constants'
import { IUserListProps } from './UserListContainer'

export const UserList = ({[USER_STORE]: {users}}: IUserListProps) => {
    return (
        <div>
            {users.map((user) =>{
                return (<Typography key={user.id}> User Name is: {user.name}</Typography>)
            })}
        </div>
    )
}
