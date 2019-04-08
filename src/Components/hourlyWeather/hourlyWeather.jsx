import React from 'react';

function HourlyStatus(props){
    const { state } = props;
    if(!state) return null
    let weather = null
        if(state.cod == 200){
        const hourlyState = state.list.splice(0, 6);
         weather = hourlyState.map( (item) => {
            const time = item.dt_txt.split(' ')[1];
            return (
                <div key={Math.random()}>
                    <span>{time}</span>
                    <span>{item.weather[0].main}</span>
                    <span>{item.main.temp}</span>
                    <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt='hourly state img'/>
                    <hr/>
                </div> )
            })
        }
    return <div>{weather}</div>
}

export default HourlyStatus;