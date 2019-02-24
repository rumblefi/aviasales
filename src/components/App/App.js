import React from 'react'
import './App.scss'
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import Tickets from '../Tickets/Tickets';
import {ticketsData} from '../../ticketsData'

export default class App extends React.Component{

	state = {
		ticketsData,
		currencyFilter: 'rub',
		transferFilter: 'transfer_all' //transfer_all, transfer_without, transfer_1, transfer_2, transfer_3
	}

	doTransferFilter(tickets,filterName) {
		switch(filterName) {
			case 'transfer_all':
				return tickets
			case 'transfer_without':
				return tickets.filter( ticket => ticket.stops === 0 )
			case 'transfer_1':
				return tickets.filter( ticket => ticket.stops === 1 )
			case 'transfer_2':
				return tickets.filter( ticket => ticket.stops === 2 )
			case 'transfer_3':
				return tickets.filter( ticket => ticket.stops === 3 )			
			default:
				return tickets
		}
	}

	onCurrencyFilter = (currencyFilter) => {
		this.setState({currencyFilter})
	}

	render() {

		const {ticketsData,currencyFilter,transferFilter} = this.state

		const filterTicketsData = this.doTransferFilter(ticketsData,transferFilter)

		return(
			<div className="app">
				<Header />
				<div className="app__container">
					<Filters currencyFilter={currencyFilter} onCurrencyFilter={this.onCurrencyFilter} />
					<Tickets ticketsData={filterTicketsData} currencyFilterVal={currencyFilter} />
				</div>
			</div>
		)
	}

}