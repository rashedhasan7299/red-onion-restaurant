import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MenuItems from './components/MenuItems/MenuItems';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Menu></Menu>
        <Switch>
          <Route path='/menu/:category'>
              <MenuItems></MenuItems>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
