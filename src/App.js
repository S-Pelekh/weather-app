import React from "react";
import Form from "./components/form";
import Weather from "./components/weather/index";
import { Main } from "./styled";

const api_key = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    city: "",
    temp: "",
    weatherCondition: "",
    icon: "",
    humidity: "",
    error: "",
  };

  getWeather = async (event) => {
    event.preventDefault();
    let city = event.target.elements.city.value;
    const weatherInfo = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    ).then((res) => res.json());
    if (+weatherInfo.cod !== 404) {
      this.setState({
        city: weatherInfo.name,
        temp: Math.round(weatherInfo.main.temp - 273.15),
        weatherCondition: weatherInfo.weather[0].description,
        icon: weatherInfo.weather[0].icon,
        humidity: weatherInfo.main.humidity,
        error: "",
      });
    } else {
      this.setState({
        city: "",
        temp: "",
        weatherCondition: "",
        icon: "",
        humidity: "",
        error: "Enter correct city",
      });
    }
  };

  render() {
    return (
      <Main>
        <h1>Weather Forecast</h1>
        <Form getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          temp={this.state.temp}
          weatherCondition={this.state.weatherCondition}
          icon={this.state.icon}
          humidity={this.state.humidity}
          error={this.state.error}
        />
      </Main>
    );
  }
}
export default App;
