import React, {Component} from 'react';
import './App.css';
import {CurrentWeather} from "./CurrentWeather";

class App extends Component {
    state = {
        weather: null,
        error: null,
    };

    componentWillMount() {
        this.loadDataForCity('Tours')
    }

    loadDataForCity(city) {
        this.setState({
            weather: null,
            error: null,
        });
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=941b9aa3466642077e44fc4d6fefbd08`)
            .then((response) => {
                if (response.ok) return response.json();
                else return Promise.reject(response.json())
            })
            .then((data) => this.setState({
                weather: data
            }))
            .catch((error) => this.setState({
                error: error,
            }));
    }

    search = (event) => {
        event.preventDefault();

        const $form = event.target;
        const $city = $form.city;

        this.loadDataForCity($city.value)
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.search}>
                    <label htmlFor="city">Ville : </label>
                    <input type="text" name="city" id="city"/>
                    <button>Rechercher</button>
                </form>
                {
                    this.state.weather
                        ? <CurrentWeather data={this.state.weather}/>
                        : (this.state.error
                            ? "Pas de ville trouvé"
                            : "Loading...")
                }
            </div>
        );
    }
}


export default App;
