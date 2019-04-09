import React from 'react';
import './currentWeater.css'

function CurrentWeather(props){

     const { state } = props;
     if(!state){
         return null
     } else {
         const { current, location } = state
         const date = new Date();
         const currentDate = date.toDateString().split(' ');
        return(
            <div className='currentWeather'>
                <div className='currentWeather--img'>
                    <img src= {current.condition.icon} alt= 'current state'/>
                    <span>{current.temp_c}°C</span>
                </div>
                <div className='currentWeather--state'>
                    <p className='locationName'>{location.name}</p>
                    <p>{currentDate[0]}, {currentDate[2]} {currentDate[1]}</p>
                    <p>Today is {current.condition.text}</p>
                </div>
                <hr/>
            </div>
        )
     }
}

export default CurrentWeather;
