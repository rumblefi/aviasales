import React from 'react'
import './CurrencyFilters.scss'
import CurrencyFilter from '../CurrencyFilter/CurrencyFilter';

const CurrencyFilters = () => {

	return(
		<div className="currency-filters" >
			<CurrencyFilter text="rub" active />
			<CurrencyFilter text="usd" />
			<CurrencyFilter text="eur" />
		</div>
	)
	
}

export default CurrencyFilters