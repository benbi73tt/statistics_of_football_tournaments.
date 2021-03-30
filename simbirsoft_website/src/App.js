import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Leag} from './Leag';
import {Teams} from './Teams';
import {CalendTeam} from './CalendarTeam';
import {CalendLeag} from './CalendarLeag';

const config = {
  headers: {"X-Auth-Token": '716110be467a449db37bde0affb10e9c'}
}

 function App() {
  // gettingMatch = async(event) => {//async чтобы всё работало ассинхронно(без перезагрузки)
  //   event.preventDefault();

  //    const api_url = await 
  //    fetch(`http://api.football-data.org/v2/competitions/`, config);
  //    const data = await api_url.json();
  //    console.log(data);
  // }
    return(
      <>
      <Router>
        <NaviBar>
          <Switch>
            <Route exact path='/' component={Leag}/>
            <Route exact path='/team' component={Teams}/>
            <Route exact path='/calendLeag' component={CalendLeag}/>
            <Route exact path='/calendTeam' component={CalendTeam}/> 
          </Switch>
        </NaviBar>
      </Router>
      </>
  //     <form onSubmit={this.gettingMatch}>
  //     <button>Получить Матчи</button>
  //      </form>
    )
}
export default App;