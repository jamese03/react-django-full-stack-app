import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { USER_STORE } from '../../../constants/constants'
import { IUserListProps } from './UserListContainer'
import { IUser } from '../../../mobxmodels/user'

export const UserList = ({[USER_STORE]: {users}}: IUserListProps) => {
    return (
        <div>
            {users.map((user: IUser, index) =>{
                return (
                    <span key={index}>
                        <Typography> 
                            User Name is: {user.name}
                        </Typography>
                        <Button onClick={user.deleteUser}> Delete User </Button>
                    </span>
                );
            })}
        </div>
    )
}
