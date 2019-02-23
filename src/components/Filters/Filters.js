import React from 'react'
import './Filters.scss'
import CurrencyFilters from '../CurrencyFilters/CurrencyFilters';
import FiltersBlock from '../FiltersBlock/FiltersBlock';

const Filters = () => {

	return(
		<div className="filters" >
			<div className="filters__inner">
				<FiltersBlock title="Валюта" >
					<CurrencyFilters />
				</FiltersBlock>
			</div>
		</div>
	)
	
}

export default Filters