import React from 'react'
import './TicketInfoBlock.scss'
import classNames from 'classnames'
import {formatDate} from '../../helpers'

const TicketInfoBlock = ({ data: {time,city,city_name,date}, modificator }) => {

	const clazz = classNames('ticket-info-block', modificator)

	return(
		<div className={clazz}>
			<div className="ticket-info-block__time">{time}</div>
			<div className="ticket-info-block__city">{city}, {city_name}</div>
			<div className="ticket-info-block__date">{formatDate(date)}</div>
		</div>
	)
	
}

export default TicketInfoBlock