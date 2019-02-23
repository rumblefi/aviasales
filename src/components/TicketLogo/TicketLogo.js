import React from 'react'
import './TicketLogo.scss'

const TicketLogo = ({imgSrc}) => {

	return(
		<div className="ticket-logo">
			<img src={imgSrc} alt=""/>
		</div>
	)
	
}

export default TicketLogo