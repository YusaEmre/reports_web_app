import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  return <div className="App">
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
    </Switch>
      </div>;
}

export default App;
