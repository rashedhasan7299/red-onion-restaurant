import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MenuItems from './components/MenuItems/MenuItems';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import SingleItem from './components/SingleItem/SingleItem';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Menu></Menu>
        <Switch>
          <Route path='/menu/:category'>
            <MenuItems></MenuItems>
          </Route>
          <Route path='/menu/:id'>
            <SingleItem></SingleItem>
          </Route>
          <Route exact path='/'>
            <Redirect to='/menu/lunch' />
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <ChooseUs></ChooseUs>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
