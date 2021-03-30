import React, { Component } from 'react';

const config = {
    headers: {"X-Auth-Token": '716110be467a449db37bde0affb10e9c'}
  }

export default class leag extends Component {
    gettingMatch = async(event) => {//async чтобы всё работало ассинхронно(без перезагрузки)
        event.preventDefault();
    
         const api_url = await 
         fetch(`http://api.football-data.org/v2/competitions/`, config);
         const data = await api_url.json();
         console.log(data);
      }

    render() {
        return (
        <form onSubmit={this.gettingMatch}>
            <button>Получить Матчи</button>
        </form>
        )
    }
}