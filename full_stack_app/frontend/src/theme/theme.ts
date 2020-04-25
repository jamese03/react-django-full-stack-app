import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    palette: {
        type: "dark",
    },
    overrides: {
        MuiButton: {
            root: {
                backgroundColor: "grey",
                margin: "4px",
            },
        },
    },
});
