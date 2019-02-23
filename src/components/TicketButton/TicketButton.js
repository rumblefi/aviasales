import React from 'react'
import './TicketButton.scss'

const TicketButton = ({price}) => {

	return(
		<button type="button" className="ticket-button">
			Купить
			<br />
			за {price} ₽
		</button>
	)
	
}

export default TicketButton