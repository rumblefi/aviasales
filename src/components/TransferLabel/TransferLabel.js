import React from 'react'
import './TransferLabel.scss'
import TransferCheckbox from '../TransferCheckbox/TransferCheckbox'

const TransferLabel = ({title}) => {

	return(
		<label className="transfer-label" >
			<TransferCheckbox />
			<span className="transfer-label__title">{title}</span>
		</label>
	)
	
}

export default TransferLabel