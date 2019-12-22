import React from 'react';
import Weather from './weather/index.js'
import FormWeather from './weather/form-component.js'
import {Container} from 'reactstrap'
import 'weather-icons/css/weather-icons.css'
import './App.css';

const API_KEY = "a3f2c7562b598ae7b40695428f22a80e"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      temp_celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    
    this.weatherIcon={
      ThunderStorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"

    }
  }
  getWeather = async(e) =>{
    e.preventDefault();
    const country = e.target.elements.country.value
    const city = e.target.elements.city.value

    if(city && country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const response = await api_call.json()
    console.log(response)

    this.setState({
      city:`${response.name}, ${response.sys.country}`,
      temp_celsius:this.calCelsius(response.main.temp),
      temp_min: this.calCelsius(response.main.temp_min),
      temp_max: this.calCelsius(response.main.temp_max),
      description: response.weather[0].description
    })
    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
    }else{
      this.setState({error:true})
    }
  }
  get_WeatherIcon(icons, rangeID){
    switch(true){
      case rangeID >= 200 && rangeID <= 232:
        this.setState({icon:this.weatherIcon.ThunderStorm});
        break;
        case rangeID >= 300 && rangeID <= 321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
        case rangeID >= 500 && rangeID <= 531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
        case rangeID >= 600 && rangeID <= 621:
        this.setState({icon:this.weatherIcon.Snow});
        break;
        case rangeID >= 700 && rangeID <= 781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
        case rangeID === 800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
        case rangeID >= 800 && rangeID <= 804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
        default:
          this.setState({icon:this.weatherIcon.Clouds})
    }
  }
  calCelsius(temp){
    let cell = Math.floor(temp - 273.15)
    return cell
  }
  render(){
    return (
      <Container>
      <div className="mt-4 text-center">
        
        <FormWeather
        loadWeather={this.getWeather}
        error={this.state.error}
        
        />
        
        <Weather 
        city={this.state.city} 
        country={this.state.country} 
        icon={this.state.icon} 
        temp_celsius={this.state.temp_celsius}
        temp_min={this.state.temp_min}
        temp_max={this.state.temp_max}
        description={this.state.description}
        />
      </div>
      </Container>
    );
  }
  
    
  
}
  

export default App;