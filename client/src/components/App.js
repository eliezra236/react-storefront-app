import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopNavbar from "./global/TopNavbar";
import Admin from "./pages/Admin.tsx";
import Home from "./pages/Home.tsx";

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
