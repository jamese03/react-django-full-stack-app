import { WithStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';

import { ContainerHOC } from '../HOC/ContainerHOC';
import { Header } from './Header';
import { HeaderStyles } from './HeaderStyles';

export interface HeaderProps extends RouteComponentProps<any>, WithStyles<typeof HeaderStyles> {}

export const HeaderContainer = ContainerHOC(Header, [], HeaderStyles, true)