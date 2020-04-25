import { WithStyles } from "@material-ui/core";
import { ContainerHOC } from "../components/HOC/ContainerHOC";
import App from "./App";
import { AppStyles } from "./AppStyles";

export interface IAppProps extends WithStyles<typeof AppStyles> {}

export const AppContainer = ContainerHOC(App, [], AppStyles)