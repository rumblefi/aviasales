import React from 'react'
import 'normalize.css/normalize.css'
import './App.scss'
import Header from '../Header/Header';

export default class App extends React.Component{

	render() {
		return(
			<div className="app">
				<Header />
			</div>
		)
	}

}