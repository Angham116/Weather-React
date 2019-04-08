import React from 'react';
import './currentWeater.css'

function CurrentWeather(props){

     const { state } = props;
     if(!state){
         return null
     } else {
         const { current } = state
         const date = new Date();
         const currentDate = date.toDateString().split(' ');
        return(
            <div className='currentWeather'>
                <div className='currentWeather--img'>
                    <img src= {current.condition.icon} alt= 'current state'/>
                </div>
                <div className='currentWeather--state'>
                    <span>{currentDate[0]}, {currentDate[2]} {currentDate[1]}</span>
                    <span>Today is {current.condition.text}</span>
                </div>
            </div>
        )
     }
}

export default CurrentWeather;
