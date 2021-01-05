import React, { useEffect } from 'react'
import { formatDistance } from 'date-fns'

function Article(props) {
	return (
		<div>
			<div className="row col-12 mb-2">
			  <div className="card">
		        <div className="row no-gutters">
		            <div className="col-auto">
		                <img src={props.image} className="img-fluid" alt=""/>
		            </div>
		            <div className="col">
		                <div className="card-block px-2 py-2">
		                    <h5 className="card-title"><a href={props.link} target="_blank" className="text-dark">{props.title}</a></h5>
		                    <span className="badge badge-primary">{props.tag}</span> <span className="badge badge-danger">{props.source}</span>
		                </div>
		                <div className="float-right mt-4 mb-1">{formatDistance(new Date(props.published), new Date())} ago</div>
		            </div>
		        </div>
			  </div>
			</div>
		</div>
	)
}

export default Article