import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Sidebar() {
	const [articles, setArticles] = useState([])
	const [tags, setTags] = useState([])

	const getArticles = async () => {
		try {
			let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/news?order_by=popular&limit=5`)
			setArticles(response.data.results)
		} catch(e) {
			console.log(e.message)
		}
	}

	const getTags = async () => {
		try {
			let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tags`)
			setTags(response.data)
		} catch(e) {
			console.log(e.message)
		}
	}

	useEffect(() => {
		getArticles()
		getTags()
	}, [])

	return (
		<div>
		<div className="card mb-3">
			<div className="card-header bg-danger text-white">
				<i className="fas fa-fire mr-1"></i> Paling populer
			</div>
			<div className="card-body">
				<ul className="list-group list-group-flush">
				{
					articles.map(article => {
						return (
							<li className="list-group-item" key={article.id}>
								<h6>
								<a className="text-secondary" href={article.link}>
								{article.title}
								</a>
								</h6>
							</li>
						)
					})
				}
					
				</ul>
			</div>
		</div>
		<div className="card">
			<div className="card-header bg-danger text-white">
				<i className="fas fa-hashtag mr-1"></i> Tags
			</div>
			<div className="card-body">
				<ul className="list-group list-group-flush">
					{
						tags.map((tag, index) => {
							if(tag.total < 3)
								return
							return(
								<li className="list-group-item" key={index}>
										<h6><NavLink to={`/tag/${tag.tag}`}>{tag.tag}</NavLink> ({tag.total})</h6>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
		</div>
	)
}

export default Sidebar