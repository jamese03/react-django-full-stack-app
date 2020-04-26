import { USER_STORE } from '../../constants/constants';
import { IUserStore } from '../../mobxmodels/userStore';
import { ContainerHOC } from '../HOC/ContainerHOC';
import { AddNewUserButton } from './AddNewUserButton';


export interface IAddUserButtonProps {
    [USER_STORE]: IUserStore
}

export const AddNewUserButtonContainer = ContainerHOC(AddNewUserButton, [USER_STORE])