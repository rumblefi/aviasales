import React from 'react'
import './FiltersBlock.scss'

const FiltersBlock = ({title,children}) => {

	return(
		<div className="filters-block" >
			<div className="filters-block__title">{title}</div>
			{children}
		</div>
	)
	
}

export default FiltersBlock