import React from 'react'
import './TransferCheckbox.scss'
import checkMark from '../../assets/icons/check-mark.svg'

const TransferCheckbox = () => {

	return(
		<div className="transfer-checkbox" >
			<input type="checkbox" className="transfer-checkbox__input" />
			<div className="transfer-checkbox__custom">
				<img src={checkMark} alt=""/>
			</div>
		</div>
	)
	
}

export default TransferCheckbox