import React from 'react'

import Router from './router'
import Navbar from './components/Navbar'

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