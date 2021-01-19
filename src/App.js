import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import LayoutTemplate from './containers/template/Layout';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import LoginPage from './containers/template/loginPage';
import MiniDrawer from './containers/template/tsx';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/dashboard" component={MiniDrawer} />
        <Route path="/" component={LoginPage} />
        
      </Switch>
    </Router>
    
  );
}

export default App;
