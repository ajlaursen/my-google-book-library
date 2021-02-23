import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Saved from "./pages/Saved"
import Search from "./pages/Search"


function App() {
  return (
   <Router>
     {/* rendered always */}
      <Link to="/">Search</Link>
      <Link to="/saved">Saved</Link>
    {/* Rendered conditionally */}
    <Switch>
      <Route exact path="/">
        <Search />
      </Route>
      <Route path="/saved">
        <Saved />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
