import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import LogIn from './Pages/LogIn';


function App() {

  return (
      <Router>
        <div>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/profile">
                  <Profile />
              </Route>
              <Route exact path="/login">
                  <LogIn />
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
