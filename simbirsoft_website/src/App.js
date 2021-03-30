import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
//import { Button } from 'react-bootstrap';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Team from './pages/Team';
import Leag from './pages/Leag';

class App extends Component {
	render() {
		return (
			<div >
        <Router>   
        <Header/>
          <Switch>
            <Route path='/team' component={Team}/>
            <Route path='/leag' component={Leag}/>
          </Switch>
        </Router>
			</div>
		);
	}
}

export default App;






