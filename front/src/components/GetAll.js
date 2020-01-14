import React from 'react';

class GetAll extends React.Component {
	state = {
		items: [],
	}

	render() {
		return (
			<div className="GetAll" >
				<ul>
					{this.state.items.map((item, i) => <li key={i}>{i}, {item.Nom_de_la_station}, {item.geo}</li>)}
				</ul>
			</div>
		)
	}
}

export default GetAll;
