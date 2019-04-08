import React from 'react';

function Weekly(props){
//  console.log(99999, props);
 const { state } = props;
 if(!state) return null
 else console.log(1111, state.forecast.forecastday);
 const forecast = state.forecast.forecastday;
//  else{
//      console.log(1111, state);
    const array = forecast.map(item => {
        
        return(
            <div key={Math.random()}>
                <span>{item.day.maxtemp_c}</span>
                <img src={item.day.condition.icon}/>
                <span>{item.day.condition.text}</span>
                <hr/>
            </div>
        )
    })
 
 return (
    <div>
        <div>
            {array}
        </div>
    </div>
 );
}

export default Weekly;