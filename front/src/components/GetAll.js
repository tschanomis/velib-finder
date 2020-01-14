import React from 'react';
import axios from 'axios';

class GetAll extends React.Component {
	state = {
		stations: [],
		items: []
	}

	componentDidMount = () => {
		axios.get('http://localhost:4000/data/data')
			.then(response => response.data)
			.then(value => this.setState({ stations: value }))
			.catch(error => console.log(error))
			.finally(() => console.log("axios done"))
	}

	distance = (lat1, lon1, lat2, lon2, unit) => {
		if ((lat1 == lat2) && (lon1 == lon2)) {
			return 0;
		}
		else {
			var radlat1 = Math.PI * lat1 / 180;
			var radlat2 = Math.PI * lat2 / 180;
			var theta = lon1 - lon2;
			var radtheta = Math.PI * theta / 180;
			var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
				dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180 / Math.PI;
			dist = dist * 60 * 1.1515;
			if (unit == "K") { dist = dist * 1.609344 }
			if (unit == "N") { dist = dist * 0.8684 }
			return dist;
		}
	}

	render() {
		const stockItems = this.state.stations.filter((item, i) => this.distance(parseFloat(item.geo.split(',')[0]), parseFloat(item.geo.split(',')[1]), this.props.coord[0], this.props.coord[1], 'K') < 0.5)
		this.props.item(stockItems)
		return (
			<div className="GetAll" >
				<ul>
					{stockItems.map((item, i) => <li key={i}>{i}, {item.Nom_de_la_station}, {item.geo}</li>)}
				</ul>
			</div>
		)
	}
}

export default GetAll;
