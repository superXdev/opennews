import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Stats() {
	const [stat, setStat] = useState([])

	const getStat = async () => {
		try {
			let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/stats`)
			setStat(response.data)
		} catch(e) {
			console.log(e.message)
		}
	}

	useEffect(() => {
		getStat()
		console.log(window.location.pathname === '/stats')
	}, [])

	return (
		<div className="row">
			<div class="col-md-12">
				<div className="card">
					<div className="card-body">
					<div className="row">
						<div className="col-md-3 text-center">
						<h1>{stat.total_views}</h1>
						<div className="text-secondary">Total Views</div>
						</div>
						<div className="col-md-3 text-center">
						<h1>{stat.api_hits}</h1>
						<div className="text-secondary">Api Hits</div>
						</div>
						<div className="col-md-3 text-center">
						<h1>{stat.total_news}</h1>
						<div className="text-secondary">Total News</div>
						</div>
						<div className="col-md-3 text-center">
						<h1>{stat.news_today}</h1>
						<div className="text-secondary">News Today</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stats