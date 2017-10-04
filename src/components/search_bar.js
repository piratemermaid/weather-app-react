import React from 'react';

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: '' };
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.city);
		this.setState({ city: '' });
	}

	handleChange(e) {
		this.setState({ city: e.target.value });
	}

	render() {
		return(
			<div className="row expanded search-bar">
				<form className="col-md-2 col-md-offset-5" onSubmit={this.handleSubmit.bind(this)} >
					<div className="form-group">
						<input value={this.state.city} onChange={this.handleChange.bind(this)} type="text" className="form-control" placeholder="Enter city" />
						<button className="btn btn-default">Get forecast</button>
					</div>
				</form>
			</div>
		);
	}
}
