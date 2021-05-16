import React from "react";

import { Card } from "./styled";
const Weather = (props) => (
  <div>
    {props.city && (
      <Card>
        <h3>The weather in {props.city}</h3>
        <img
          src={` http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt=""
        />
        <p>
          Temperature:{" "}
          <b>
            {props.temp} <sup>o</sup>C
          </b>
        </p>
        <p>
          Weather condition: <b>{props.weatherCondition}</b>
        </p>

        <p>
          Humidity: <b>{props.humidity}%</b>
        </p>
      </Card>
    )}
    <p>{props.error}</p>
  </div>
);

export default Weather;
