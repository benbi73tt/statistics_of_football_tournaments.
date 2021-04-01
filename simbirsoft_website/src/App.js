import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Team from './pages/Team';
import Leag from './pages/Leag';
import CalendarLeag from './pages/CalendLeag';



class App extends Component {
	render() {
		return (
			<div >
        <Router>   
        <Header/>
          <Switch>
            <Route path='/team' component={Team}/>
            <Route path='/leag' component={Leag}/>
            <Route path='/Calendarleag' component={CalendarLeag}/>
          </Switch>
        </Router>
			</div>
		);
	}
}

export default App;







