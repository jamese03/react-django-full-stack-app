import {
    Button,
    FormControl,
    Input,
    InputLabel,
    Paper,
} from "@material-ui/core";
import React, { useState } from "react";

import { IUser } from "../../../mobxmodels/user";
import { IFormProps } from "./FormContainer";
import { USER_STORE } from "../../../constants/constants";

export const Form = ({ [USER_STORE]: { newUser }, classes }: IFormProps) => {

    return (
        <div className={classes.formContainer}>
        <Paper variant={"outlined"}>
            <FormControl>
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input value={newUser.name} onChange={(e) => {newUser.setName(e.target.value)}} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="component-simple">
                    Email
                </InputLabel>
                <Input value={newUser.email} onChange={(e) => {newUser.setEmail(e.target.value)}} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="component-simple">
                    About
                </InputLabel>
                <Input value={newUser.about_me} onChange={(e) => {newUser.setAbout_me(e.target.value)}} />
            </FormControl>
        </Paper>
    </div>
    )
};
