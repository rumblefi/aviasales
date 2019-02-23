import React from 'react'
import './App.scss'
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import Tickets from '../Tickets/Tickets';

export default class App extends React.Component{

	render() {
		return(
			<div className="app">
				<Header />
				<div className="app__container">
					<Filters />
					<Tickets />
				</div>
			</div>
		)
	}

}