import React from 'react'
import './Ticket.scss'
import ticketLogo from '../../assets/ticketLogo.svg'
import transferIcon from '../../assets/icons/transfer-icon.svg'

const Ticket = () => {

	return(
		<div className="ticket" >
			<div className="ticket__col ticket__col--left">
				<div className="ticket__logo">
					<img src={ticketLogo} alt=""/>
				</div>
				<button type="button" className="ticket__button">
					Купить
					<br />
					за 21 032 ₽
				</button>
			</div>
			<div className="ticket__col ticket__col--right">
				<div className="ticket-block ticket-block--origin">
					<div className="ticket-block__title">09:25</div>
					<div className="ticket-block__city">VVO, Владивосток</div>
					<div className="ticket-block__time">9 окт 2018, Пт</div>
				</div>	
				<div className="ticket-transfer">
					<div className="ticket-transfer__title">1 пересадка</div>
					<img src={transferIcon} alt="" className="ticket-transfer__icon" />
				</div>
				<div className="ticket-block ticket-block--destination">
					<div className="ticket-block__title">09:25</div>
					<div className="ticket-block__city">VVO, Владивосток</div>
					<div className="ticket-block__time">9 окт 2018, Пт</div>
				</div>	
			</div>
		</div>
	)
	
}

export default Ticket