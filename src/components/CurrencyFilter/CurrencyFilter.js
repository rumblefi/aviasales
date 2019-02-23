import React from 'react'
import './CurrencyFilter.scss'
import classNames from 'classnames'

const CurrencyFilter = ({text,active}) => {

	const clazz = classNames({
		'currency-filter': true,
		'currency-filter--is-active': active
	})

	return(
		<button className={clazz}>{text}</button>
	)
	
}

export default CurrencyFilter