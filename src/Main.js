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
			<footer className="footer mt-auto py-3 bg-dark">
			  <div className="container">
			    <span className="text-white">Developed by <a className="text-warning" href="https://fikridev.tech">Fikri Rudiansyah</a> with <span className="text-danger">❤️</span> </span>
			  </div>
			</footer>
		</div>
	)
}

export default Main