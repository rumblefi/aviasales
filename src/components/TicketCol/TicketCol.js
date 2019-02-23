import React from 'react'
import './TicketCol.scss'
import classNames from 'classnames'

const TicketCol = ({modificator, children}) => {

	const clazz = classNames('ticket-col', modificator)

	return(
		<div className={clazz} >
			{children}
		</div>	
	)
	
}

export default TicketCol