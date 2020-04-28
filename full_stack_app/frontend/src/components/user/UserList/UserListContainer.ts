import { ContainerHOC } from '../../HOC/ContainerHOC';
import { UserList } from './UserList';
import { UserListStyles } from './UserListStyles';
import { USER_STORE } from '../../../constants/constants';
import { IUserStore } from '../../../mobxmodels/userStore';
import { RouteComponentProps } from 'react-router';
import { WithStyles } from '@material-ui/core';



export interface IUserListProps extends RouteComponentProps<any>, WithStyles<typeof UserListStyles> {
    [USER_STORE]: IUserStore
}

export const UserListContainer = ContainerHOC(UserList, [USER_STORE], UserListStyles, true)