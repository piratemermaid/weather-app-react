import React from 'react';

import ForecastItem from './forecast_item';

const Forecast = (props) => {
	const forecastList = props.forecast.map((day) => {
		var style = getColor(day.temp);
		if(day.key != 0) {
			return(
				<ForecastItem
					key={day.key}
					date={day.date}
					temp={day.temp}
					icon={day.iconURL}
					high={day.high}
					low={day.low}
					style={style}
				/>
			);
		}
	});

	var lgStyle = getColor(props.forecast[0].temp);

	function getColor(temp) {
		var style;
		if(temp <= 32) {
			style = { background: '#C7E8EF' };
		}
		else if (temp > 32 && temp < 40) {
			style = { background: '#8BD6F2' };
		}
		else if (temp >= 40 && temp < 50) {
			style = { background: '#88C3EB' };
		}
		else if (temp >= 50 && temp < 60) {
			style = { background: '#6795CE' };
		}
		else if (temp >= 60 && temp < 70) {
			style = { background: '#5CC1D7' };
		}
		else if (temp >= 70 && temp < 80) {
			style = { background: '#7AC798' };
		}
		else if (temp >= 80 && temp < 90) {
			style = { background: '#F1DD32' };
		}
		else if (temp >= 90 && temp < 100) {
			style = { background: 'orange' };
		}
		else {
			style = { background: '#F3742F' };
		}
		return style;
	}

	return(
		<div>
			<div className="panel panel-default">
				<div className="panel-body" style={lgStyle}>
					<div className="row panel-heading panel-lg-heading">
						{ props.forecast[0].date }
					</div>
					<div className="row panel-lg">
						<div className="col-md-3 panel-lg-panel temp">
							{ props.forecast[0].temp }°
						</div>
						<div className="col-md-3 panel-lg-panel icon">
							<img src={ props.forecast[0].iconURL } />
						</div>
						<div className="col-md-3 panel-lg-panel high-low">
							High<br />
							{ props.forecast[0].high }°
						</div>
						<div className="col-md-3 panel-lg-panel high-low">
							Low<br />
							{ props.forecast[0].low }°
						</div>
					</div>
				</div>
			</div>
			<div className="row forecast-list">
				{forecastList}
			</div>
		</div>
	);
	
}

export default Forecast;