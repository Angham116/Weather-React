import React, { Component } from 'react';
import { currentWeather, weeklyWeather, hourlyWeather } from '../../utilis/getWeather';
import CurrentStatus from '../CurrentWeather/CurrentWeather';
import HourlyStatus from '../hourlyWeather/hourlyWeather';
import WeeklyStatus from '../WeeklyWeather/weeklyWeather';

class Form extends Component{
    state = {
        city: ' ',
        currentStatus: null,
        WeeklyState: null,
        hourlyState: null
    };

    handleCity = (event) => this.setState({city: event.target.value})

    handleSearch = (e) => {
        e.preventDefault();
        const { city } = this.state;
        currentWeather(city)
        .then(CurrentState => this.setState({currentStatus: CurrentState}))
        .catch(error => { throw error })

        weeklyWeather(city)
        .then(WeeklyStates => this.setState({WeeklyState:WeeklyStates}))
        .catch(error => { throw error })

        hourlyWeather(city)
        .then(hourlyStatus => this.setState({hourlyState: hourlyStatus}))
    }

    render(){
        return(
            <div className='home'>
                <img src='https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-1.svg'/>
                <form onSubmit={this.handleSearch} className='form'>
                    <input name='city' type='text' onChange={this.handleCity} className='input--form'/>
                    <button className='search--form'>search</button>
                </form>
                <CurrentStatus state={this.state.currentStatus}/>
                <HourlyStatus state={this.state.hourlyState}/>
                <WeeklyStatus state={this.state.WeeklyState}/>
            </div>
        )
    }

}

export default Form;