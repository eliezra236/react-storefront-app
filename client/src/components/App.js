import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopNavbar from "./global/TopNavbar";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import Stats from "./pages/States/Stats";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/stats">
            <Stats />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
