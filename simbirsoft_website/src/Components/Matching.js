import React from 'react'

const form =(props)=> (
    <div >
    {props.leag?     
        <span>                
            <p>Местоположение: {props.city}, {props.country}</p>
            <p>Температура: {props.temp}</p>
            <p>Давление: {props.pressure} </p>
            <p>Заход солнца: {props.sunset}</p>
        </span>
        :<p className="error">{props.error}</p>
    }

</div>
        )

export default form;