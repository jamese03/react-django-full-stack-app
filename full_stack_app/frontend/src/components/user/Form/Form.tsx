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

export const Form = ({
    [USER_STORE]: { newUser, createUser },
    classes,
}: IFormProps) => {
    const handleEmailInput = (value: string) => {
        newUser.setEmail(value);
        if (!newUser.emailHasBeenEdited) {
            newUser.setEmailHasBeenEdited();
        }
    };
    const handleNameInput = (value: string) => {
        newUser.setName(value);
        if (!newUser.nameHasBeenEdited) {
            newUser.setNameHasBeenEdited();
        }
    };

    return (
        <div className={classes.formContainer}>
            <Paper variant={"outlined"}>
                <FormControl>
                    <InputLabel htmlFor="component-simple">
                        Name (required)
                    </InputLabel>
                    <Input
                        error={!newUser.isNameValid && newUser.nameHasBeenEdited}
                        value={newUser.name}
                        onChange={(e) => {
                            handleNameInput(e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-simple">
                        Email (required)
                    </InputLabel>
                    <Input
                        error={!newUser.isEmailValid && newUser.emailHasBeenEdited}
                        value={newUser.email}
                        onChange={(e) => {
                            handleEmailInput(e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-simple">
                        About (optional)
                    </InputLabel>
                    <Input
                        error={!newUser.isAbout_meValid}
                        value={newUser.about_me}
                        onChange={(e) => {
                            newUser.setAbout_me(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                createUser();
                            }
                        }}
                    />
                </FormControl>
            </Paper>
        </div>
    );
};
