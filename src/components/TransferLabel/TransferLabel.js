import React from 'react'
import './TransferLabel.scss'
import TransferCheckbox from '../TransferCheckbox/TransferCheckbox'

const TransferLabel = ({name,labelText,checked,onFilterAllChange,onFilterChange,onTransferFilterChange}) => {

	return(
		<label className="transfer-label" >
			<TransferCheckbox name={name} checked={checked} onFilterAllChange={onFilterAllChange} onFilterChange={onFilterChange} onTransferFilterChange={onTransferFilterChange} />
			<span className="transfer-label__title">{labelText}</span>
		</label>
	)
	
}

export default TransferLabel