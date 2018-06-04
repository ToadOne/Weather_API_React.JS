import React, {Component} from "react";
import {KelvinAsCelcius} from "./KelvinAsCelcius";
import {WeatherItem} from "./WeatherItem";

export class CurrentWeather extends Component {
    render() {
        const weather = this.props.data;
        return <div>
            <h1>{weather.name}</h1>
            <p>Température : <KelvinAsCelcius temperature={weather.main.temp}/></p>
            {
                weather.weather
                    .map((item) =>
                        <WeatherItem item={item} key={item.id}/>
                    )
            }
        </div>;
    }
}