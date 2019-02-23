import React from 'react'
import './TicketTransfer.scss'
import transferIcon from '../../assets/icons/transfer-icon.svg'

const TicketTransfer = ({transfersCount}) => {

	return(
		<div className="ticket-transfer">
			<div className="ticket-transfer__title">{transfersCount} пересадка</div>
			<img src={transferIcon} alt="" className="ticket-transfer__icon"/>
		</div>
	)
	
}

export default TicketTransfer