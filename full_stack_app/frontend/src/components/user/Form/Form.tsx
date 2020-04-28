import { Button, FormControl, Grid, Input, InputLabel, Paper } from '@material-ui/core';
import React, { useState } from 'react';

import { USER_STORE } from '../../../constants/constants';
import { IFormProps } from './FormContainer';


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

    const handleAddNewUser = async () => {
        await createUser();
        setShowform(false);
    };

    const [showForm, setShowform] = useState(false);

    return (
        <div className={classes.formContainer}>
            <Button
                onClick={() => {
                    setShowform(true);
                }}
            >
                Add New User
            </Button>
            {showForm && (
                <Paper className={classes.paperContainer} variant={"outlined"}>
                    <Grid alignItems={"center"} container spacing={3}>
                        <Grid item xs={3}>
                            <FormControl>
                                <InputLabel htmlFor="component-simple">
                                    Name (required)
                                </InputLabel>
                                <Input
                                    error={
                                        !newUser.isNameValid &&
                                        newUser.nameHasBeenEdited
                                    }
                                    value={newUser.name}
                                    onChange={(e) => {
                                        handleNameInput(e.target.value);
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl>
                                <InputLabel htmlFor="component-simple">
                                    Email (required)
                                </InputLabel>
                                <Input
                                    error={
                                        !newUser.isEmailValid &&
                                        newUser.emailHasBeenEdited
                                    }
                                    value={newUser.email}
                                    onChange={(e) => {
                                        handleEmailInput(e.target.value);
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
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
                                            handleAddNewUser();
                                        }
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                            <Button disabled={!newUser.isValidForSave} onClick={handleAddNewUser}>
                                    Save User
                            </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </div>
    );
};
