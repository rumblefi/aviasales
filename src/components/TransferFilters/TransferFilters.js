import React from 'react'
import './TransferFilters.scss'
import TransferLabel from '../TransferLabel/TransferLabel'

export default class TransferFilters extends React.Component {

    state = {
        transferFilters: [
            {
                name: 'transfer_all',
                labelText: 'Все',
                checked: true
            }, {
                name: 'transfer_without',
                labelText: 'Без пересадок',
                checked: false
            }, {
                name: 'transfer_1',
                labelText: '1 пересадка',
                checked: false
            }, {
                name: 'transfer_2',
                labelText: '2 пересадки',
                checked: false
            }, {
                name: 'transfer_3',
                labelText: '3 пересадки',
                checked: false
            }
        ]
    }

    onFilterChange = (event) => {
        alert('1')        
    }

    render() {

        const {transferFilters} = this.state

        const filters = transferFilters.map(({name, labelText, checked}) => <TransferLabel
            key={name}
            name={name}
            labelText={labelText}
            checked={checked}
            onFilterChange={this.onFilterChange}
            onTransferFilterChange={this.props.onTransferFilterChange}/>)

        return (
            <div className="transfer-filters">
                {filters}
            </div>
        )

    }

}