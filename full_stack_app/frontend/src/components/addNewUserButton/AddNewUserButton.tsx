import React from 'react'
import { IAddUserButtonProps } from './AddNewUserButtonContainer'
import { USER_STORE } from '../../constants/constants'
import { Button } from '@material-ui/core'

export const AddNewUserButton = ({[USER_STORE]: {createUser}}: IAddUserButtonProps) => {
    return (
        <div>
            <Button onClick={createUser}>
                Add New User
            </Button>
        </div>
    )
}
