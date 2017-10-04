import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SearchBar from './components/search_bar';
import Forecast from './components/forecast';

class App extends React.Component {
	constructor() {
		super();
		this.state = { forecast: [], city: '' };

		this.getForecast('Boston');
	}

	getForecast(city) {

		const APIKey = '&APPID=0a251a1a7a6f73af1b34df803bf7a955';
		const APICall = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&cnt=7' + APIKey;

		$.get(APICall, function(forecast) {
			// console.log(forecast);

			let newForecast = [];
			this.setState({ city: forecast.city.name });
			for(let i=0; i < forecast.list.length; i++) {
				
				var iconURL = 'http://openweathermap.org/img/w/' + forecast.list[i].weather[0].icon + '.png';

				newForecast.push({
					date: this.formatDate(i),
					temp: Math.round(forecast.list[i].main.temp),
					high: Math.round(forecast.list[i].main.temp_max),
					low: Math.round(forecast.list[i].main.temp_min),
					iconURL: iconURL,
					key: i
				});
			}
			this.setState({ forecast: newForecast });
		}.bind(this));
	}

	handleSubmit(city) {
		this.getForecast(city);
	}

	formatDate(i) {
		var moment = require('moment');
		return moment().add(i, 'day').format('MMM D YYYY');
	}
	
	render () {
		if(this.state.forecast.length === 0) {
			return null;
		}

		return(
			<div>
				<SearchBar onSubmit={this.handleSubmit.bind(this)} />
				<div className="container">
					<div className="col-md-8 col-md-offset-2 main">
					<h3>Forecast for {this.state.city}</h3>
						<Forecast forecast={this.state.forecast} />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));