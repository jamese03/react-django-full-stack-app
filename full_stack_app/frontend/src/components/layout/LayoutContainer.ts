import { WithStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';

import { ContainerHOC } from '../HOC/ContainerHOC';
import { Layout } from './layout';
import { LayoutStyles } from './LayoutStyles';

export interface LayoutProps extends RouteComponentProps<any>, WithStyles<typeof LayoutStyles> {}

export const LayoutContainer = ContainerHOC(Layout, [], LayoutStyles, true)