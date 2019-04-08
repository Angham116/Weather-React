import React from 'react';

function Weekly(props){
 
 const { state } = props;
 if(!state) return null
 
 const forecast = state.forecast.forecastday;

const array = forecast.map(item => {
    return(
        <div key={Math.random()}>
            <span>{item.day.maxtemp_c}</span>
            <img src={item.day.condition.icon} alt='image of day weather state'/>
                <span>{item.day.condition.text}</span>
                <hr/>
            </div>
         )
    })
 
    return <div> {array} </div>
}

export default Weekly;
