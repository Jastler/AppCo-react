import { Switch, Route } from "react-router-dom";

import { MainPage } from './components/MainPage/';
import { TablePage } from './components/TablePage';
import { PageInfo } from './components/PageInfo';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/stats/:pageId?" exact component={TablePage}>
          </Route> 
          <Route path="/info/:id" exact component={PageInfo}>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
