import React, { Component } from 'react'
import Form from '../Components/Form';
import winner from '../img/winner.png';
import draw from '../img/free-icon-not-equal-3898212.png';


const config = {
    headers: {"X-Auth-Token": '716110be467a449db37bde0affb10e9c'}
  }

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error:null,
             isLoaded:false,
             items:[]
        };
    }

  gettingMatching = async(event) => {//async чтобы всё работало ассинхронно(без перезагрузки)
     event.preventDefault();
     var leag = event.target.elements.leag.value;

     if(leag){
      const api_url = await 
      fetch(`https://api.football-data.org/v2/competitions/${leag}/matches`,config);
      const data = await api_url.json();
      console.log(data.matches);

      this.setState({
          items:data.matches,
          error:undefined
      });
     }
     else{
         this.setState({
             items:[],
             error:"Введите название лиги!",
         })
     }

  }
  render() {
      const list = this.state.items.map((item,index)=>{
          return(<tr key={item.id}> 
            <th scope='row'>{index+1} </th>
              <td>{item.utcDate.replace(/[a-zа-яё]/gi, ' ')}</td>
              <td>{item.homeTeam.name}{item.score.winner==='HOME_TEAM'?<img src={winner}/>:""}</td>
              <td> {item.score.winner==='DRAW'?<img src={draw}/>:""}</td>
              <td>{item.awayTeam.name}{item.score.winner==='AWAY_TEAM'?<img src={winner}/>:""}</td>
             
          {/* {item.score.winner==='HOME_TEAM'
          ?<span><img src={winner}/>AwayTeam: {item.awayTeam.name} vs HomeTeam: {item.homeTeam.name}</span>
          :""}
          {item.score.winner==='AWAY_TEAM'
          ?<span>AwayTeam - {item.awayTeam.name} vs HomeTeam - {item.homeTeam.name}<img src={winner}/></span>:""}
           {item.score.winner===null
          ?<span>AwayTeam - {item.awayTeam.name} vs HomeTeam - {item.homeTeam.name}</span>:""}
            {item.score.winner==='DRAW'
          ?<span>AwayTeam - {item.awayTeam.name} vs HomeTeam - {item.homeTeam.name}<img src={draw}/></span> :""} */}
              
         </tr>)
      })
    return (
        <div className="wrapper">
            <Form MatchingMethod={this.gettingMatching}/>
            <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Date and Time</th>
                <th scope="col">HomeTeam</th>
                <th scope="col"></th>
                <th scope="col" >AwayTeam</th>
                </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
            </table>
            
        </div>


    )
  }
}

