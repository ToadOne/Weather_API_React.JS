import React, {Component} from "react";

export class KelvinAsCelcius extends Component {
    render() {
        const temperatureInCelcius = this.props.temperature - 273.15;
        return <span>{temperatureInCelcius.toFixed(1)} °C</span>
    }
}
