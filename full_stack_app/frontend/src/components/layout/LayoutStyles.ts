import { Theme, createStyles } from "@material-ui/core";

export const LayoutStyles = (theme: Theme) => {
    return createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,
        },
        appBarButtons: {
            textAlign: "end",
        },
    });
};
