import React from 'react'
import './TicketButton.scss'
import {formatPrice} from '../../helpers.js'

export default class TicketButton extends React.Component{

	checkCurrency(price,currencyFilterVal) {
        const {price_rub, price_usd, price_eur} = price
        
        switch (currencyFilterVal) {
            case 'rub':
                return `${formatPrice(price_rub)} ₽`
            case 'usd':
                return `${formatPrice(price_usd)} $`
            case 'eur':
                return `${formatPrice(price_eur)} €`
            default:
                return `${formatPrice(price_rub)} ₽`
        }

    }

	render() {

		const {price,currencyFilterVal} = this.props

		return(
			<button type="button" className="ticket-button">
				Купить
				<br />
				за {this.checkCurrency(price,currencyFilterVal)} 
			</button>
		)
	}
	
}