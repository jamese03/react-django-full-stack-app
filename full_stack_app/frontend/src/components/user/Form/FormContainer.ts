import { USER_STORE } from "../../../constants/constants";
import { IUserStore } from "../../../mobxmodels/userStore";
import { ContainerHOC } from "../../HOC/ContainerHOC";
import { Form } from "./Form";

export interface IFormProps {
    [USER_STORE]: IUserStore
}

export const FormContainer = ContainerHOC(Form, [USER_STORE])