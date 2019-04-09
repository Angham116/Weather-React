import React from 'react';

function Weekly(props){
 
 const { state } = props;
 if(!state) return null
 
 const forecast = state.forecast.forecastday;

const array = forecast.map(item => {
    const { date, day } = item;
    return(
            <div key={ Math.random() }>
                <p> { date } </p>
                <span> { Math.round(day.maxtemp_c) }°C </span>
                <img src={ day.condition.icon } alt='img of day weather state'/>
                <span> { day.condition.text } </span> 
                <hr/>
            </div>
         )
    })
 
    return (
        <div>
            <h1> Weather status for the next week </h1>
            <div> {array} </div>
        </div>
    )
}


export default Weekly;
