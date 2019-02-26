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

    updateAllFilters(arr,checked) {
        return arr.map( filter => ({
            ...filter,
            checked 
        }))
    }

    onFilterAllChange = (event) => {
        const {target: {name,checked}} = event
        if(name === 'transfer_all') {
            this.setState( ({transferFilters}) => ({
                transferFilters: this.updateAllFilters(transferFilters,checked)
            }))
        }
    }

    updateOneFilter(index,arr,checked) {
        const item = arr[index]
        return {
            ...item,
            checked
        }
    }

    uncheckAllFilter(index,arr) {
        const item = arr[index]
        return {
            ...item,
            checked: false
        }
    }
    
    onFilterChange = (event) => {
        const {target: {name,checked}} = event
        if(name !== 'transfer_all') {
            this.setState( ({transferFilters}) =>  {
                const allFilterIndex = transferFilters.findIndex( filter => filter.name === 'transfer_all' )
                const targetIndex = transferFilters.findIndex( filter => filter.name === name )
                const newArr = [
                    this.uncheckAllFilter(allFilterIndex,transferFilters),
                    ...transferFilters.slice(1,targetIndex),
                    this.updateOneFilter(targetIndex,transferFilters,checked),
                    ...transferFilters.slice(targetIndex + 1),
                ]
                return{
                    transferFilters: newArr
                }
            })
        }
    }

    render() {

        const {transferFilters} = this.state

        const filters = transferFilters.map(({name, labelText, checked}) => <TransferLabel
            key={name}
            name={name}
            labelText={labelText}
            checked={checked}
            onFilterAllChange={this.onFilterAllChange}
            onFilterChange={this.onFilterChange}
            onTransferFilterChange={this.props.onTransferFilterChange}/>)

        return (
            <div className="transfer-filters">
                {filters}
            </div>
        )

    }

}