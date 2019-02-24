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
                checked: true
            }, {
                name: 'transfer_1',
                labelText: '1 пересадка',
                checked: true
            }, {
                name: 'transfer_2',
                labelText: '2 пересадки',
                checked: true
            }, {
                name: 'transfer_3',
                labelText: '3 пересадки',
                checked: true
            }
        ]
    }

    onFilterAllChange = (e) => {
        const target = e.target
        const {transferFilters} = this.state

        if (target.name === 'transfer_all') { //если выбираем "Все"
            const oldFilters = transferFilters
            const newFilters = oldFilters.map(filter => ({
                ...filter,
                checked: target.checked
            }))
            this.setState({transferFilters: newFilters})
        }

    }

    onFilterChange = (e) => {
        const {transferFilters} = this.state
        const target = e.target
        transferFilters.forEach(filter => {
            if (filter.name === target.name) 
                filter.checked = target.checked
        })
        this.setState({transferFilters})
    }

    render() {

        const {transferFilters} = this.state

        const filters = transferFilters.map(({name, labelText, checked}) => 
            <TransferLabel
                key={name}
                name={name}
                labelText={labelText}
                checked={checked}
                onFilterChange={this.onFilterChange}
                onFilterAllChange={this.onFilterAllChange}
                onTransferFilterChange={this.props.onTransferFilterChange}
            />
        )

        return (
            <div className="transfer-filters">
                {filters}
            </div>
        )

    }

}