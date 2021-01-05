import React from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'

import Router from './router'
import Navbar from './components/Navbar'

const baseUrl = React.createContext('https://opennewsapi.herokuapp.com')
function Main() {
	

	return (
		<div>
			<Navbar/>
			<div className="container py-4">
				<Router/>
			</div>
		</div>
	)
}

export default Main