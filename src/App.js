import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Programmes from './components/pages/Programmes';
import Media from './components/pages/Media';
import About from './components/pages/About';
import GetInvolved from './components/pages/GetInvolved';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/programmes' component={Programmes} />
          <Route path='/media' component={Media} />
          <Route path='/about' component={About} />
          <Route path='/get-involved' component={GetInvolved} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
