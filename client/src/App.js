import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import saveBooks from './pages/saveBooks';
import searchBooks from './pages/searchBooks';
import noMatch from './pages/noMatch';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App () {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={searchBooks} />
          <Route exact path='/saved' component={saveBooks} />
          <Route exact path='/saved/:id' component={saveBooks} />
          <Route component={noMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
};

export default App;
