import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {  createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#18266d",
    },
    secondary: {
      main: "#6d9ff2",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/" to="/login" />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
