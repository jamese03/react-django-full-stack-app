import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Grid,
    makeStyles,
    Theme,
    createStyles,
    Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { LayoutProps } from "./LayoutContainer";


export const Layout = ({classes}: LayoutProps) => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={3} alignItems={"center"}>
                        <Grid item xs={6}>
                            <Typography>
                                James English - Full Stack Software Engineer
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.appBarButtons}>
                                <Button> About </Button>
                                <Button> Resume </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};
