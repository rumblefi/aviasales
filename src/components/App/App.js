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
        currencyFilter: 'rub'
    }

    onCurrencyFilter = (currencyFilter) => {
        this.setState({currencyFilter})
    }

    filterInitialTicketData(initialTicketsData,filtersTicketData,propVal) {
        return [...initialTicketsData.filter( item => item.stops === propVal ), ...filtersTicketData ]
    }

    pushFiltersTicketData(initialTicketsData,filtersTicketData,filterName) {
        switch(filterName) {
            case 'transfer_without':
                return this.filterInitialTicketData(initialTicketsData,filtersTicketData,0)
            case 'transfer_1':    
                return this.filterInitialTicketData(initialTicketsData,filtersTicketData,1)
            case 'transfer_2':    
                return this.filterInitialTicketData(initialTicketsData,filtersTicketData,2)
            case 'transfer_3':    
                return this.filterInitialTicketData(initialTicketsData,filtersTicketData,3)        
            default:
                return initialTicketsData    
        }
    }

    filterFiltersTicketData(filtersTicketData,propVal) {
        return [...filtersTicketData.filter( item => item.stops !== propVal )]
    }

    removeFilteredTickets(filtersTicketData,filterName) {
        switch(filterName) {
            case 'transfer_without':
                return this.filterFiltersTicketData(filtersTicketData,0)
            case 'transfer_1':
                return this.filterFiltersTicketData(filtersTicketData,1)
            case 'transfer_2':
                return this.filterFiltersTicketData(filtersTicketData,2)
            case 'transfer_3':
                return this.filterFiltersTicketData(filtersTicketData,3)
            default:
                return []    
        }
    }

    onTransferFilterChange = (event) => {
        const {target: {name,checked}} = event

        this.setState( ({initialTicketsData,filtersTicketData}) => {
            if(checked) {
                return {
                    filtersTicketData: this.pushFiltersTicketData(initialTicketsData,filtersTicketData,name)
                }
            }
            else{
                return {
                    filtersTicketData: this.removeFilteredTickets(filtersTicketData,name)
                }
            }
        })

    }

    // onTransferFilterChange = (event) => {
    //     const filter = event.target
    //     const filterName = filter.name
    //     const filterChecked = filter.checked

    //     this.setState(({initialTicketsData, filtersTicketData}) => {
    //         if (filterChecked) {
    //             return {
    //                 filtersTicketData: [
    //                     ...this.pushFilteredTickets(initialTicketsData, filterName),
    //                     ...filtersTicketData
    //                 ]
    //             }
    //         } else {
    //             return {
    //                 filtersTicketData: this.removeFilteredTickets(filtersTicketData, filterName)
    //             }
    //         }

    //     })

    // }

    render() {

        const {currencyFilter,filtersTicketData} = this.state

        return (
            <div className="app">
                <Header/>
                <div className="app__container">
                    <Filters
                        currencyFilter={currencyFilter}
                        onCurrencyFilter={this.onCurrencyFilter}
                        onTransferFilterChange={this.onTransferFilterChange}/>
                    <Tickets
                        ticketsData={filtersTicketData}
                        currencyFilterVal={currencyFilter}/>
                </div>
            </div>
        )
    }

}