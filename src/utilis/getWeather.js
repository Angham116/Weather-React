const API = 'f2379dbd7c37445692a114535190704';
const KYE = 'c568a01e4a034cbd5e1e512fe3da7adc';

export const currentWeather = (city) => {
   return(
       fetch(`https://api.apixu.com/v1/current.json?key=${API}&q=${city}`)
       .then(result => result.json())
       .catch(error => {throw error})
   ) 
}

export const weeklyWeather = (city) => {
    return(
        fetch(`https://api.apixu.com/v1/forecast.json?key=${API}&q=${city}&days=7`)
        .then(result => result.json())
        .catch(error => {throw error})
    )
}

export const hourlyWeather = (city) => {
    return(
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&&units=metric&&appid=${KYE}`)
        .then(result => result.json())
        .catch(error => { throw error })
    )
}
