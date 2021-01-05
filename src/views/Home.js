import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Sidebar from '../components/Sidebar'
import Article from '../components/Article'
import Header from '../components/Header'
import Paginate from '../components/Paginate'

function Home() {
	const [articles, setArticles] = useState([])
	const [order, setOrder] = useState('latest')
	const [page, setPage] = useState(1)
	const [maxPage, setMaxPage] = useState(0)
	const [keyword, setKeyword] = useState('')

	const handleChangeOrder = (e) => {
		setOrder(e.target.value)
	}

	const getArticles = async () => {
		try {
			let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/news?order_by=${order}&limit=15&page=${page}&keyword=${keyword}`)
			setArticles(response.data.results)
			setMaxPage(response.data.pages)
		} catch(e) {
			console.log(e.message)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		getArticles()
	}

	const handlePage = (n) => {
		if(page < maxPage && page > 0) {
			setPage(page + n)
		}
	}

	useEffect(() => {
		getArticles()
	}, [order, page])

	return (
		<div>
			
			<div className="row">
				<div className="col-md-8">
				<Header 
				handleOrder={handleChangeOrder}
				handleSubmit={handleSubmit}
				keyword={keyword}
				setKeyword={setKeyword}
				/>
					
				{
					articles.map(article => {
						return (
							<Article
							key={article.id}
							image={article.image}
							title={article.title}
							link={article.link}
							tag={article.tag}
							source={article.source}
							published={article.created_at}
							/>
						)
					})
				}

				<Paginate 
				handlePage={handlePage}
				page={page}
				maxPage={maxPage}
				/>
					
				</div>
				<div className="col-md-4">
					<Sidebar/>
				</div>
			</div>
		</div>
	)
}

export default Home