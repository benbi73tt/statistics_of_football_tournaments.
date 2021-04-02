import React from 'react'

const form =(props)=> (
            <form onSubmit={props.MatchingMethod}>
                <input type="text" name="leag" placeholder="Лига"/>
                <select name='leag1' >
                    <option disabled selected>Выберите Лигу</option>
                    <option value='PL'>Premier Liga</option>
                    <option value='SA'>Seria A</option>
                    <option value='BL1'>Bundesliga</option>
                    <option value='FL1'>Ligue 1</option>
                    <option value='PD'>LaLiga</option>
                    <option value='WC'>FIFA World Cup</option>

                </select>
                <button>Получить Матчи</button>
            </form>
        )

export default form;