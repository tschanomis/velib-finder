import React from 'react'
import axios from 'axios'

import './AutoComplete.css'

class AutoCompleteAdress extends React.Component {
	state = {
		start: '',
		suggestions: [],
		coord: [],
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}

	handleChange = (e) => {
		this.setState({ start: e.target.value }, () => {
			if (this.state.start.length >= 0) {
				this.getAdress()
			}
		})
	}

	getAdress = () => {
		axios
			.get('https://api-adresse.data.gouv.fr/search/', {
				params: {
					q: this.state.start,
					limit: '5',
					lat: 48.8534,
					lon: 2.3488,
					city: "Paris"
				},
			})
			.then(
				response =>
					console.log('Coordonnées:  ', response.data) ||
					response.data.features,
			)
			.then(value =>
				this.setState({
					suggestions: value,
				}),
			)
	}

	suggestionsSelected(value) {
		this.setState(() => ({
			start: value.properties.label,
			suggestions: [],
			coord: value.geometry.coordinates,
		}))
		this.props.fetch(value.geometry.coordinates)
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
		return (
			<div className="AutoCompleteText">
				<form onSubmit={this.handleSubmit}>
					<label>Adresse: </label>
					<input
						id="start"
						name="start"
						type="text"
						value={this.state.start}
						onChange={this.handleChange}
					/>
					{this.renderSugegestions()}
				</form>
			</div>
		)
	}
}

export default AutoCompleteAdress
