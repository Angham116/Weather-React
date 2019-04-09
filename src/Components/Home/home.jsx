import React, { Component } from 'react';
import { currentWeather, weeklyWeather, hourlyWeather } from '../../utilis/getWeather';
import Search from '../SearchForm/search';
import Content from '../Content/content'

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
                <Search handleSearch={this.handleSearch} handleCity={this.handleCity} />
                <Content weather={this.state}/>
            </div>
        )}
}

export default Form;
