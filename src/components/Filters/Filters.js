import React from 'react'
import './Filters.scss'
import CurrencyFilters from '../CurrencyFilters/CurrencyFilters';
import FiltersBlock from '../FiltersBlock/FiltersBlock';
import TransferFilters from '../TransferFilters/TransferFilters';

const Filters = ({currencyFilter,onCurrencyFilter,onTransferFilterChange}) => {

	return(
		<div className="filters" >
			<div className="filters__inner">
				<FiltersBlock title="Валюта" >
					<CurrencyFilters currencyFilter={currencyFilter} onCurrencyFilter={onCurrencyFilter} />
				</FiltersBlock>
				<FiltersBlock title="Количество пересадок" >
					<TransferFilters onTransferFilterChange={onTransferFilterChange} />
				</FiltersBlock>
			</div>
		</div>
	)
	
}

export default Filters