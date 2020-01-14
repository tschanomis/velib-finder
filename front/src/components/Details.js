import React from 'react';
import axios from 'axios';

import Adresses from './Adresses'

import './Details.css'

class Details extends React.Component {
	state = {
		addresses: [],
	}

	handleclick = (e) => {
		console.log(e.target.id)
	}

	render() {
		return (
			<div className="Details">
				<div className="Card-list">
					{this.props.items.slice(0, 5).map((item, i) => <div key={i} id={i} className="Card-station" onClick={this.handleclick}>
						<div className="infos">
							<div>
								<h4>Nom de la station</h4>
								<p>{item.Nom_de_la_station}</p>
							</div>
							<div className="hide">
								<div>
									<h4>Adresse</h4>
									<Adresses lat={parseFloat(item.geo.split(',')[0])} lon={parseFloat(item.geo.split(',')[1])} />
								</div>
								<div>
									<h4>Nombre de vélos</h4>
									<p>{item.Nombre_vélo_électrique + item.Nombre_de_vélo_mécanique}</p>
									<p>dont {item.Nombre_vélo_électrique} électrique(s)</p>
								</div>
							</div>
						</div>
						<div className="distance">
							<h4>Distance : </h4>
							<h5>{Math.round(item.distance)} Mètres</h5>
						</div>
					</div>)}
				</div>
				<button>button</button>
			</div>
		)
	}
}

export default Details;
