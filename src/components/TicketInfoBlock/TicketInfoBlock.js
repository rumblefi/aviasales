import React from 'react'
import './TicketInfoBlock.scss'
import classNames from 'classnames'

const TicketInfoBlock = ({ data: {time,city,city_name,date}, modificator }) => {

	const clazz = classNames('ticket-info-block', modificator)

	return(
		<div className={clazz}>
			<div className="ticket-info-block__time">{time}</div>
			<div className="ticket-info-block__city">{city}, {city_name}</div>
			<div className="ticket-info-block__date">{date}</div>
		</div>
	)
	
}

export default TicketInfoBlock