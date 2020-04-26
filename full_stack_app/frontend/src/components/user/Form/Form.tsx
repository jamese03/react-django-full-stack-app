import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { USER_STORE } from '../../../constants/constants'
import { IFormProps } from './FormContainer'

export const Form = ({[USER_STORE]:{fetchUsers}, classes}: IFormProps) => {
    return (
        <div className={classes.formContainer}>
            <Typography> Form goes here </Typography>
        </div>
    )
}
