import React from 'react';

function HourlyStatus(props){
    const { state } = props;
    if(!state) return null
    let weather = null
    // else {
        // console.log(state);
        if(state.cod == 200){
        //    console.log(state.list);
        const hourlyState = state.list.splice(0, 6);
        // console.log(hourlyState);
         weather = hourlyState.map( (item) => {
            console.log(item);
            // main.temp weather.main weather.icon
            // console.log(item.main.temp);
            // , item.weather.main, item.weather.icon
            // console.log(item.weather[0].main);
            // console.log(item.weather[0].icon);
            // console.log(`http://openweathermap.org/img/w/${item.weather[0].icon}.png`);
            const time = item.dt_txt.split(' ')[1];
            // console.log(time);
            return (
                <div key={Math.random()}>
                    <span>{time}</span>
                    <span>{item.weather[0].main}</span>
                    <span>{item.main.temp}</span>
                    <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}/>
                    <hr/>
                </div>
            )
        } )

        }
    // }
    return <div>{weather}</div>
}


export default HourlyStatus;