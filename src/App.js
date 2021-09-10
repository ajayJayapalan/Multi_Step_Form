import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
