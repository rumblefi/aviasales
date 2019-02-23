import React from 'react'
import './TransferFilters.scss'
import TransferLabel from '../TransferLabel/TransferLabel'

const TransferFilters = () => {

    return (
        <div className="transfer-filters" >
            <TransferLabel title="Все" />
            <TransferLabel title="Без пересадок" />
            <TransferLabel title="1 пересадка" />
            <TransferLabel title="2 пересадки" />
            <TransferLabel title="3 пересадки" />
		</div>
    )

}

export default TransferFilters