import React from 'react'
import './Ticket.scss'
import ticketLogo from '../../assets/ticketLogo.svg'
import TicketCol from '../TicketCol/TicketCol'
import TicketLogo from '../TicketLogo/TicketLogo'
import TicketButton from '../TicketButton/TicketButton'
import TicketInfoBlock from '../TicketInfoBlock/TicketInfoBlock'
import TicketTransfer from '../TicketTransfer/TicketTransfer'


export default class Ticket extends React.Component {

    render() {

        const {
            ticketData: {
                origin,
                origin_name,
                destination,
                destination_name,
                departure_date,
                departure_time,
                arrival_date,
                arrival_time,
                stops,
                prices
            },
            currencyFilterVal
        } = this.props

        return (
            <div className="ticket">
                <TicketCol modificator="ticket-col--left">
                    <TicketLogo imgSrc={ticketLogo}/>
                    <TicketButton price={prices} currencyFilterVal={currencyFilterVal} />
                </TicketCol>
                <TicketCol modificator="ticket-col--right">
                    <TicketInfoBlock
                        modificator="ticket-info-block--origin"
                        data={{
                        time: departure_time,
                        city: origin,
                        city_name: origin_name,
                        date: departure_date
                    }}/>
                    <TicketTransfer transfersCount={stops}/>
                    <TicketInfoBlock
                        modificator="ticket-block--destination"
                        data={{
                        time: arrival_time,
                        city: destination,
                        city_name: destination_name,
                        date: arrival_date
                    }}/>
                </TicketCol>
            </div>
        )

    }

}