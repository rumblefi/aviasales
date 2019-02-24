import React from 'react'
import './TransferCheckbox.scss'
import checkMark from '../../assets/icons/check-mark.svg'

const TransferCheckbox = ({name,checked,onFilterChange,onFilterAllChange,onTransferFilterChange}) => {

	return(
		<div className="transfer-checkbox" >
			<input type="checkbox" className="transfer-checkbox__input" name={name} checked={checked} onChange={ (e) => {
				onFilterChange(e)
				onFilterAllChange(e)
				onTransferFilterChange(e)
			}} />
			<div className="transfer-checkbox__custom">
				<img src={checkMark} alt=""/>
			</div>
		</div>
	)
	
}

export default TransferCheckbox