import React, { Component } from 'react';
import './App.css'
import Home from './Components/Home/home';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <img src='https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-1.svg' alt='logo'/>
          <h3>Awesome Weather</h3>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
