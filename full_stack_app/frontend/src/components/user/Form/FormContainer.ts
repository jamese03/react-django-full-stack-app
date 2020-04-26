import { WithStyles } from '@material-ui/core';

import { USER_STORE } from '../../../constants/constants';
import { IUser } from '../../../mobxmodels/user';
import { ContainerHOC } from '../../HOC/ContainerHOC';
import { Form } from './Form';
import { FormStyles } from './FormStyles';
import { IUserStore } from '../../../mobxmodels/userStore';

export interface IFormProps extends WithStyles<typeof FormStyles> {
    [USER_STORE]: IUserStore
}

export const FormContainer = ContainerHOC(Form, [USER_STORE], FormStyles)