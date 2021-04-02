import React, { Component } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const config = {
    method:'GET',
    headers: {"X-Auth-Token": '716110be467a449db37bde0affb10e9c'}
  }

export default class leag extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error:null,
             isLoaded:false,
             items:[],
             filterItems:[],
             check:''
        };
    }
    
    gettingMatch = async(event) => {//async чтобы всё работало ассинхронно(без перезагрузки)
        event.preventDefault();
    
         const api_url = await 
         fetch(`http://api.football-data.org/v2/teams/`, config);
         const data = await api_url.json();
         console.log(data.teams);
      }
      componentDidMount(){
          fetch(`http://api.football-data.org/v2/teams/`, config)
          .then(res=>res.json())
          .then(
                (result)=>{
                    this.setState({
                        isLoaded:true,
                        filterItems: result.teams,
                        items:result.teams
                    })
                },
                (error)=>{
                    this.setState({
                        isLoaded:true,
                        error
                    })
                },
          )
      }
      filted=(event)=>{
          this.setState({
              check:event.target.value,
          })
          let filt=this.state.items.filter(item=>{
             return item.name.toLowerCase().search(this.state.check.toLowerCase())!==-1;
      })
      this.setState({
          filterItems:filt
      })
    }


    render() {
        const {error, isLoaded, items,filterItems}=this.state;
        if(error){
            return (
                <form onSubmit={this.gettingMatch}>
                    <button>Получить Матчи</button>
                    <h1>Error {error.message}</h1>
                </form>
                )
            
        }else if(!isLoaded){
            return(
                <form onSubmit={this.gettingMatch}>
                <button>Получить Матчи</button>
                <h1>Loading...</h1>
            </form>
            )
        }else{
            return (
                <Container className="cont "  style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
                <Row>
                  <Col md='9'>
                    <form onSubmit={this.gettingMatch}>
                        <button>Получить Матчи</button>
                    </form>
                    <ul>
                        {filterItems.map(item=>(
                            <li key={item.id}>
                              <img width={'20px'} height={'20px'} src={item.crestUrl}/> 
                              {item.name}     <p>ID команды:{item.code===null?"___":item.id}</p>      
                            </li>
                        ))}
                    </ul>
                    </Col>
                    <Col mt='5' pt='5' md='3' >
                        <form >
                            <p>Найти матч</p>
                            <input onChange={this.filted}/>
                             {console.log(this.state.check)}
                        </form>
                    </Col>
        </Row>
       </Container>
                )
            
        }
    }
}
