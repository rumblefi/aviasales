import React from 'react'
import 'normalize.css/normalize.css'
import './App.scss'
import Header from '../Header/Header';
import Filters from '../Filters/Filters';

export default class App extends React.Component{

	render() {
		return(
			<div className="app">
				<Header />
				<div className="app__container">
					<Filters />
					<div className="test">
						<h1>11</h1>
					</div>
				</div>
			</div>
		)
	}

}