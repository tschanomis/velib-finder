import React from 'react';

import './Details.css'

class Details extends React.Component {
	state = {
		items: [],
	}

	render() {
		return (
			<div className="Details">
				<div className="Card-list">
					{this.props.items.slice(0, 5).map((item, i) => <div key={i} className="Card-station">
						<div className="infos">
							<div>
								<h4>Nom de la station</h4>
								<p>{item.Nom_de_la_station}</p>
							</div>
							<div>
								<h4>Adresse</h4>
								<p>wip</p>
							</div>
							<div>
								<h4>Nombre de vélos</h4>
								<p>{item.Nombre_vélo_électrique + item.Nombre_de_vélo_mécanique}</p>
								<p>dont {item.Nombre_vélo_électrique} électique(s)</p>
							</div>
						</div>
						<div className="distance">
							<h4>Distance : </h4>
							<h5>{item.distance} Metres</h5>
						</div>
					</div>)}
				</div>
			</div>
		)
	}
}

export default Details;
