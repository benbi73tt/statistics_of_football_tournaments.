import React, { Component } from 'react';

const config = {
    headers: {"X-Auth-Token": '716110be467a449db37bde0affb10e9c'}
  }

export default class leag extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error:null,
             isLoaded:false,
             items:[]
        };
    }
    
    gettingMatch = async(event) => {//async чтобы всё работало ассинхронно(без перезагрузки)
        event.preventDefault();
    
         const api_url = await 
         fetch(`http://api.football-data.org/v2/competitions/`, config);
         const data = await api_url.json();
         console.log(data);
      }
      componentDidMount(){
          fetch(`http://api.football-data.org/v2/competitions/`, config)
          .then(res=>res.json())
          .then(
                (result)=>{
                    this.setState({
                        isLoaded:true,
                        items: result.competitions
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

    render() {
        const {error, isLoaded, items}=this.state;
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
                <div>
                    <form onSubmit={this.gettingMatch}>
                        <button>Получить Матчи</button>
                    </form>
                    <ul>
                        {items.map(item=>(
                            <li key={item.id}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                )
            
        }
    }
}

