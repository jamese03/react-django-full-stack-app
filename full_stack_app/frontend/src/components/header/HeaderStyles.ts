import { Theme, createStyles } from "@material-ui/core";

export const HeaderStyles = (theme: Theme) => {
    return createStyles({
        headerRoot: {
            flexGrow: 1,
            marginBottom: "10px",
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
