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

// import React, { Component } from 'react';

// const config = {
//     headers: {"X-Auth-Token": '716110be467a449db37bde0affb10e9c'}
//   }

// export default class leag extends Component {
//     constructor(props){
//         super(props)

        
//         this.state={
//             error:null,
//             isLoaded:false,
//             leag:[]
//         }

//     }

//         componentDidMount(){
//          fetch(`http://api.football-data.org/v2/competitions/`, config)
//          .then(res=>res.json())
//          .then(
//              (result)=>{
//                  this.setState({
//                      isLoaded:true, 
//                      items:result.name
//                  })
//              },
//              (error)=>{
//                  this.setState({
//                      isLoaded:true,
//                      error
//                  })
//              }
//          )
//         //  const data = await api_url.json();
//         //  console.log(data);
//       }

//     render() {
//         const {error, isLoaded,items}=this.state;
//         if(error){
//             return <p>Error {error.message}</p>
//         }else if(!isLoaded){
//             return <p>Loading...</p>
//         }
//         else{
//             return(
//                 <ul>
//                     {items.map(item=(
//                         <li key={item.name}> 
//                         {item.name}</li>
//                     ))}
//                 </ul>
//             )
//         }
//     }
// }