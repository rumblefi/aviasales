import React from 'react'
import './App.scss'
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import Tickets from '../Tickets/Tickets';
import {ticketsData} from '../../ticketsData'

export default class App extends React.Component{

	state = {
		defaultTicketsData: ticketsData,
		filterTicketData: ticketsData,
		currencyFilter: 'rub',
		transferFilter: 'transfer_all' //transfer_all, transfer_without, transfer_1, transfer_2, transfer_3
	}

	onCurrencyFilter = (currencyFilter) => {
		this.setState({currencyFilter})
	}

	onTransferFilterChange = (event) => {
		const filter = event.target
		const filterName = filter.name
		const filterChecked = filter.checked

		this.setState( (state) =>  {
			const copyDefaultTickets = state.defaultTicketsData

			if(filterChecked) {

				let filterTicketData 
				
				if(filterName === 'transfer_without') {
					filterTicketData = copyDefaultTickets.filter( ticket => ticket.stops === 0 )
				}

				else if(filterName === 'transfer_1') {
					filterTicketData = copyDefaultTickets.filter( ticket => ticket.stops === 1 )
				}

				else if(filterName === 'transfer_2') {
					filterTicketData = copyDefaultTickets.filter( ticket => ticket.stops === 2 )
				}

				else if(filterName === 'transfer_3') {
					filterTicketData = copyDefaultTickets.filter( ticket => ticket.stops === 2 )
				}

				else{

					filterTicketData = copyDefaultTickets

				}

				return{
					filterTicketData: [...state.filterTicketData, ...filterTicketData]
				}

			}

			else{

				let newFilterTickets 
				
				if(filterName === 'transfer_without') {
					newFilterTickets = state.filterTicketData.filter( ticket => ticket.stops !== 0 )
				}

				else if(filterName === 'transfer_1') {
					newFilterTickets = state.filterTicketData.filter( ticket => ticket.stops !== 1 )
				}

				else if(filterName === 'transfer_2') {
					newFilterTickets = state.filterTicketData.filter( ticket => ticket.stops !== 2 )
				}

				else if(filterName === 'transfer_3') {
					newFilterTickets = state.filterTicketData.filter( ticket => ticket.stops !== 3 )
				}

				else{

					newFilterTickets = []

				}

				return{
					filterTicketData: newFilterTickets
				}

			}


		})

	}

	render() {

		const {ticketsData,currencyFilter,transferFilter} = this.state

		return(
			<div className="app">
				<Header />
				<div className="app__container">
					<Filters currencyFilter={currencyFilter} onCurrencyFilter={this.onCurrencyFilter} onTransferFilterChange={this.onTransferFilterChange} />
					<Tickets ticketsData={this.state.filterTicketData} currencyFilterVal={currencyFilter} />
				</div>
			</div>
		)
	}

}