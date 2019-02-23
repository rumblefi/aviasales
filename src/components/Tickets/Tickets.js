import React from 'react'
import './Tickets.scss'
import Ticket from '../Ticket/Ticket';

const Tickets = ({ticketsData}) => {

    return (
        <div className="tickets" >
			<Ticket ticketData={ticketsData} />
		</div>
    )

}

export default Tickets