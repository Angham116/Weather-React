import React from 'react';
import CurrentStatus from '../CurrentWeather/CurrentWeather';
import HourlyStatus from '../HourlyWeather/hourlyWeather';
import WeeklyStatus from '../WeeklyWeather/weeklyWeather';


function Content(props){
    return (
       <div>
            <CurrentStatus state={props.weather.currentStatus}/>
            <HourlyStatus state={props.weather.hourlyState}/>
            <WeeklyStatus state={props.weather.WeeklyState}/> 
       </div>
    )
}

export default Content;