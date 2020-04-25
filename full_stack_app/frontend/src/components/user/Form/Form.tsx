import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { USER_STORE } from '../../../constants/constants'
import { IFormProps } from './FormContainer'

export const Form = ({[USER_STORE]:{users, fetchUsers}}: IFormProps) => {
    return (
        <div>
            <Typography> Form goes here </Typography>
            <Button onClick={fetchUsers} > getUsers! </Button>
        </div>
    )
}
