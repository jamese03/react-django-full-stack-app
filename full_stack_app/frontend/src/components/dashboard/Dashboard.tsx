import React from "react";
import { FormContainer } from "../user/Form/FormContainer";
import { AddNewUserButtonContainer } from "../addNewUserButton/AddNewUserButtonContainer";

export const Dashboard = () => {
    return (
        <div>
            <AddNewUserButtonContainer />
            <FormContainer />
        </div>
    );
};
