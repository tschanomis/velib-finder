import React from 'react';
import axios from 'axios';

class GetAll extends React.Component {
	state = {
		stations: [],
	}

	handleTest = () => {
		axios.get('http://localhost:4000/data/data')
			.then(response => response.data)
			.then(value => this.setState({ stations: value }))
			.catch(error => console.log(error))
			.finally(() => console.log(this.state.stations))
	}

	render() {
		return (
			<div className="GetAll" >
				<button type='submit' onClick={this.handleTest}>Get</button>
				<ul>
					{this.state.stations.map((item, i) => <li key={i}>{item.Nom_de_la_station}, {item.geo}</li>)}
				</ul>
			</div>
		)
	}
}

export default GetAll;
