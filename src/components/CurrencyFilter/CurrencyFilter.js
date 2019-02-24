import React from 'react'
import './CurrencyFilter.scss'
import classNames from 'classnames'

const CurrencyFilter = ({text,active,onClick}) => {

	const clazz = classNames({
		'currency-filter': true,
		'currency-filter--is-active': active
	})

	return(
		<button className={clazz} onClick={onClick} >{text}</button>
	)
	
}

export default CurrencyFilter