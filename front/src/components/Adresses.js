import React from 'react';
import axios from 'axios';

class Adresses extends React.Component {
	state = {
		add: ''
	}

	getAdress = (latitude, longitude) => {
		axios.get('https://api-adresse.data.gouv.fr/reverse/', {
			params: {
				lat: latitude,
				lon: longitude,
			},
		}).then(value => {
			const newValue = (value.data.features[0].properties.label)
			console.log(newValue)
			this.setState({ add: newValue })
		})
	}

	componentDidMount = () => {
		this.getAdress(this.props.lat, this.props.lon)
	}

	render() {
		return (
			<p className="Adresses">{this.state.add}</p>
		)
	}
}

export default Adresses;
