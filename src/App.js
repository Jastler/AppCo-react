import { Switch, Route } from "react-router-dom";

import { MainPage } from './components/MainPage/';
import { TablePage } from './components/TablePage';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/stats">
            <TablePage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
