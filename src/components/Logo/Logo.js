import React from 'react'
import './Logo.scss'
import logo from '../../assets/logo/logo.svg'

const Logo = () => {

	return(
		<a href="https://www.aviasales.ru/" target="_blank" className="logo" >
			<img src={logo} alt=""/>
		</a>	
	)
	
}

export default Logo