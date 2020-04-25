import { withStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import { IReactComponent } from 'mobx-react/dist/types/IReactComponent';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

export const ContainerHOC = (component: IReactComponent, stores?: any, styles?: any, router?: boolean) => {
    if (stores) {
        if (router) {
            if (styles) {
                return compose<any, any>(
                    withStyles(styles, { withTheme: true }),
                    withRouter,
                    inject(...stores),
                    observer,
                )(component);
            } else {
                return compose<any, any>(withRouter, inject(...stores), observer)(component);
            }
        } else {
            if (styles) {
                return compose<any, any>(
                    withStyles(styles, { withTheme: true }),
                    inject(...stores),
                    observer,
                )(component);
            } else {
                return compose<any, any>(inject(...stores), observer)(component);
            }
        }
    } else {
        if (router) {
            if (styles) {
                return compose<any, any>(withStyles(styles, { withTheme: true }), withRouter)(component);
            } else {
                return compose<any, any>(withRouter)(component);
            }
        } else {
            if (styles) {
                return compose<any, any>(withStyles(styles, { withTheme: true }))(component);
            } else {
                return component;
            }
        }
    }
};