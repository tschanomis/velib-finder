import React from 'react'
import axios from 'axios'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import './AutoComplete.css'

class AutoCompleteAdress extends React.Component {
	state = {
		start: '',
		suggestions: [],
		//center: [48.8528, 2.3473],
		coord: [48.8528, 2.3473],
		items: [],
		bool: false
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}

	handleChange = (e) => {
		this.setState({ start: e.target.value }, () => {
			if (this.state.start.length >= 0) {
				this.getAdress();
			}
		})
	}

	getAdress = () => {
		axios.get('https://api-adresse.data.gouv.fr/search/', {
			params: {
				q: this.state.start,
				limit: '5',
				lat: 48.8534,
				lon: 2.3488,
				city: "Paris",
			},
		}).then(response => response.data.features)
			.then(value => this.setState({ suggestions: value }))
	}

	getStations = (latitude, longitude) => {
		console.log("axios post : ", this.state.coord[0])
		axios.post('http://localhost:4000/data/data', {
			lat: latitude,
			lon: longitude
		})
			.then(response => response.data)
			.then(value => this.setState({ items: value }))
			.catch(error => console.log(error))
			.finally(() => console.log("axios done"))
	}

	suggestionsSelected(value) {
		this.setState(() => ({
			start: value.properties.label,
			suggestions: [],
			coord: value.geometry.coordinates
		}))
		const tabCoord = (value.geometry.coordinates.reverse())
		this.getStations(tabCoord[0], tabCoord[1])
		this.setState({ bool: true })
	}

	renderSugegestions() {
		const { suggestions } = this.state
		if (suggestions.length === 0) {
			return null
		}
		return (
			<ul>
				{suggestions.map(item => (
					<li
						onClick={() => this.suggestionsSelected(item)}
						key={item.properties.label}
					>
						{item.properties.label}
					</li>
				))}
			</ul>
		)
	}

	render() {
		console.log(this.state.coord)
		console.log(this.state.items[0])
		return (
			<div>
				<div className="AutoCompleteText">
					<form onSubmit={this.handleSubmit}>
						<input
							id="start"
							name="start"
							type="text"
							value={this.state.start}
							onChange={this.handleChange}
							placeholder="Adresse"
							autoComplete="off"
						/>
						{this.renderSugegestions()}
					</form>
				</div>
				<h1> autoComplete : {this.state.coord[0]} : {this.state.coord[1]}</h1>
				<div className="Container	Result">
					{this.state.bool ? (
						<div className="ContainerResult">
							<Map center={this.state.coord} zoom={16} width={600} height={400} >
								<Marker anchor={this.state.coord} payload={1} onClick={this.handleClick} />
								{this.state.items.map((item, i) => <Overlay key={i} anchor={[parseFloat(item.geo.split(',')[0]), parseFloat(item.geo.split(',')[1])]}>
									<img src='https://pngimage.net/wp-content/uploads/2018/05/bicycle-logo-png-1.png' width={70} height={40} alt='pin-velo' />
								</Overlay>)}
							</Map>
							<ul>
								<li>Ref {this.state.coord}</li>
								{this.state.items.map((item, i) => <li key={i}>{item.Nom_de_la_station}, {item.geo}</li>)}
							</ul>
						</div>) : ('')}
				</div>
			</div>
		)
	}
}

export default AutoCompleteAdress
