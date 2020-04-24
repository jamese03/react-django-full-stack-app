import React from "react";
import ReactDom from "react-dom";


class App extends React.Component {
    render() {
        return <h1> Hello World </h1>
    }
}

ReactDom.render(<App />, document.getElementById("root"));

// import("./App").then((App) => {
//     ReactDOM.render(
//         <Provider {...rootStore}>
//             <ThemeProvider theme={theme}>
//                 <CssBaseline />
//                 <Router>
//                     <App.AppContainer />
//                 </Router>
//             </ThemeProvider>
//         </Provider>,
//         document.getElementById("root"),
//     );
// });
