import React from 'react'
import './Tickets.scss'
import Ticket from '../Ticket/Ticket';

const Tickets = ({ticketsData,currencyFilterVal}) => {

    const tickets = ticketsData.map( ticket =>  
        <Ticket key={ticket.id} ticketData={ticket} currencyFilterVal={currencyFilterVal} />
    )

    return (
        <div className="tickets" >
            {tickets}
		</div>
    )

}

export default Tickets