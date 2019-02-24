import React from 'react'
import './TransferLabel.scss'
import TransferCheckbox from '../TransferCheckbox/TransferCheckbox'

const TransferLabel = ({name,labelText,checked,onFilterChange,onFilterAllChange,onTransferFilterChange}) => {

	return(
		<label className="transfer-label" >
			<TransferCheckbox name={name} checked={checked} onFilterChange={onFilterChange} onFilterAllChange={onFilterAllChange} onTransferFilterChange={onTransferFilterChange} />
			<span className="transfer-label__title">{labelText}</span>
		</label>
	)
	
}

export default TransferLabel