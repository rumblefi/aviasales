import React from 'react'
import './App.scss'
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import Tickets from '../Tickets/Tickets';
import {ticketsData} from '../../ticketsData'

export default class App extends React.Component {

    state = {
        initialTicketsData: ticketsData,
        filtersTicketData: ticketsData,
        currencyFilter: 'rub',
        transferFilter: 'transfer_all' //transfer_all, transfer_without, transfer_1, transfer_2, transfer_3
    }

    onCurrencyFilter = (currencyFilter) => {
        this.setState({currencyFilter})
    }

    pushFilteredTickets(tickets, filterName) {
        switch (filterName) {
            case 'transfer_without':
                return tickets.filter(ticket => ticket.stops === 0)
            case 'transfer_1':
                return tickets.filter(ticket => ticket.stops === 1)
            case 'transfer_2':
                return tickets.filter(ticket => ticket.stops === 2)
            case 'transfer_3':
                return tickets.filter(ticket => ticket.stops === 3)
            default:
                return tickets
        }
    }

    removeFilteredTickets(tickets, filterName) {
        switch (filterName) {
            case 'transfer_without':
                return tickets.filter(ticket => ticket.stops !== 0)
            case 'transfer_1':
                return tickets.filter(ticket => ticket.stops !== 1)
            case 'transfer_2':
                return tickets.filter(ticket => ticket.stops !== 2)
            case 'transfer_3':
                return tickets.filter(ticket => ticket.stops !== 3)
            default:
                return []
        }
    }

    onTransferFilterChange = (event) => {
        const filter = event.target
        const filterName = filter.name
        const filterChecked = filter.checked

        this.setState(({initialTicketsData, filtersTicketData}) => {
            if (filterChecked) {
                return {
                    filtersTicketData: [
                        ...this.pushFilteredTickets(initialTicketsData, filterName),
                        ...filtersTicketData
                    ]
                }
            } else {
                return {
                    filtersTicketData: this.removeFilteredTickets(filtersTicketData, filterName)
                }
            }

        })

    }

    render() {

        const {currencyFilter} = this.state

        return (
            <div className="app">
                <Header/>
                <div className="app__container">
                    <Filters
                        currencyFilter={currencyFilter}
                        onCurrencyFilter={this.onCurrencyFilter}
                        onTransferFilterChange={this.onTransferFilterChange}/>
                    <Tickets
                        ticketsData={this.state.filtersTicketData}
                        currencyFilterVal={currencyFilter}/>
                </div>
            </div>
        )
    }

}