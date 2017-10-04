import React from 'react';

const ForecastItem = ({date, temp, icon, high, low, style}) => {
	return(
		<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
			<div className="panel panel-default">
				<div className="panel-body" style={style}>
					<div className="row panel-heading">
						{date}
					</div>
					<div className="panel-sm">
						<div className="row temp-icon">
							<div className="col-md-6">
								{temp}°<br />
							</div>
							<div className="col-md-6">
								<img src={icon} /><br />
							</div>
						</div>
					</div>
					<div className="panel-sm">
						<div className="row high-low">
							<div className="col-md-6">
								High<br />
								{high}°
							</div>
							<div className="col-md-6">
								Low<br />
								{low}°
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ForecastItem;