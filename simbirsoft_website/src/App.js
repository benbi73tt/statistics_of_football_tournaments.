import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Team from './pages/Team';
import Leag from './pages/Leag';
import Home from './pages/Home';
import CalendarLeag from './pages/CalendLeag';
import CalendarTeam from './pages/CalendarTeam';



class App extends Component {
	render() {
		return (
      <>
			<div >
        <Router>   
        <Header/>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/team' component={Team}/>
            <Route path='/leag' component={Leag}/>
            <Route path='/Calendarleag' component={CalendarLeag}/>
            <Route path='/Calendarteam' component={CalendarTeam}/>
          </Switch>
        </Router>
			</div>
      </>
		);
	}
}

export default App;







