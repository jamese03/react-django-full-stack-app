import { USER_STORE } from "../../../constants/constants";
import { IUserStore } from "../../../mobxmodels/userStore";
import { ContainerHOC } from "../../HOC/ContainerHOC";
import { Form } from "./Form";
import {FormStyles} from "./FormStyles"
import { WithStyles } from "@material-ui/core";

export interface IFormProps extends WithStyles<typeof FormStyles> {
    [USER_STORE]: IUserStore
}

export const FormContainer = ContainerHOC(Form, [USER_STORE], FormStyles)