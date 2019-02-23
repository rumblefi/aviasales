import React from 'react'
import './App.scss'
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import Tickets from '../Tickets/Tickets';
import {ticketsData} from '../../fixtures'

export default class App extends React.Component{

	state = {
		ticketsData
	}

	render() {

		const {ticketsData} = this.state

		return(
			<div className="app">
				<Header />
				<div className="app__container">
					<Filters />
					<Tickets ticketsData={ticketsData} />
				</div>
			</div>
		)
	}

}