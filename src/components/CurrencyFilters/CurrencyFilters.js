import React from 'react'
import './CurrencyFilters.scss'
import CurrencyFilter from '../CurrencyFilter/CurrencyFilter';

const filtersData = [
    {
        name: 'rub',
        text: 'rub'
    }, {
        name: 'usd',
        text: 'usd'
    }, {
        name: 'eur',
        text: 'eur'
    }
]

const CurrencyFilters = ({currencyFilter,onCurrencyFilter}) => {

	const filters = filtersData.map(({name,text}) => 
		<CurrencyFilter 
			key={name} 
			text={text}
			active={name === currencyFilter}
			onClick={ () => onCurrencyFilter(name) }
		/>
	)

    return (
        <div className="currency-filters">
            {filters}
        </div>
    )

}

export default CurrencyFilters