import React from 'react'

export default function Paginate(props) {
	return (
		<div className="row col">
			<div className="form-group">
				<button className="btn btn-primary" onClick={() => props.handlePage(-1)}>{'<<'}</button> <button className="btn btn-disabled btn-secondary">{`${props.page} - ${props.maxPage}`}</button> <button className="btn btn-primary" onClick={() => props.handlePage(+1)}>{'>>'}</button>
			</div>
		</div>
	)
}