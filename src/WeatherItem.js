import React, {Component} from "react";

export class WeatherItem extends Component {
    render() {
        const item = this.props.item;
        return <p>{item.description}</p>
    }
}