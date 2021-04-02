import React, { Component } from 'react'
import Form from '../Components/Form';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import winner from '../img/winner.png';
import draw from '../img/free-icon-not-equal-3898212.png';  


const config = {
  method:'GET',
    headers: {"X-Auth-Token": '716110be467a449db37bde0affb10e9c'}
  }

export default class CalendarLeag extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error:null,
             isLoaded:false,
             items:[],
        };
    }

  gettingMatching = async(event) => {//async чтобы всё работало ассинхронно(без перезагрузки)
     event.preventDefault();
     var leag = event.target.elements.leag.value;
     var leag1 = event.target.elements.leag1.value;
     event.target.elements.leag.value='';
     event.target.elements.leag1.value='Выберите Лигу';

     if(leag){
      const api_url = await 
      fetch(`https://api.football-data.org/v2/competitions/${leag}/matches`,config);
      const data = await api_url.json();
      console.log(data.matches);

      if(data.matches!==undefined){
        this.setState({
          items:data.matches,
          error:undefined
      });
    }else{
      this.setState({
        items:[],
        error:<h5><h1>Неправильный КОД лиги,</h1>пожалуйста, попробуйте снова</h5>,
    })
      }

 
     }else if(leag1!=='Выберите Лигу'){
      const api_url = await 
      fetch(`https://api.football-data.org/v2/competitions/${leag1}/matches`,config);
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
             error:<h4>Введите или выберите название лиги!</h4>,
         })
     }

  }



  render() {
    const {items, error}=this.state;
    if(error){
      return(  
      <div className="wrapper">
        <Form MatchingMethod={this.gettingMatching}/>
        <span>{error}</span>
      </div>)
    }
    else{
      const list = this.state.items.map((item,index)=>{
          return(<tr key={item.id}> 
            <th scope='row'>{index+1} </th>
              <td>{item.utcDate.replace(/[a-zа-яё]/gi, ' ')}</td>
              <td>{item.homeTeam.name}{item.score.winner==='HOME_TEAM'?<img src={winner}/>:""}</td>
              <td> {item.score.winner==='DRAW'?<img src={draw}/>:""}</td>
              <td>{item.awayTeam.name}{item.score.winner==='AWAY_TEAM'?<img src={winner}/>:""}</td>
         </tr>)
      })
    return (
      <Container className="cont "  style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
        <Row>
          <Col md='9'>
          <Form  MatchingMethod={this.gettingMatching}/>
            <table  class="table table-hover">
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

          </Col>
          <Col mt='5' pt='5' md='3' >
            <form >
                <p>Найти матч</p>
                <input onChange={(event)=>console.log(event.target.value)}/>
            </form>
          </Col>
        </Row>
       </Container>


    )
    }
  }
}

