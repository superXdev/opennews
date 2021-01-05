import React from 'react'

function Header(props) {
	return (
		<div className="row">
			<div className="col-4">
				<div className="form-group">
					<select name="order" className="form-select col-12" onChange={props.handleOrder}>
						<option value="latest">Latest</option>
						<option value="popular">Popular</option>
						<option value="oldest">Oldest</option>
					</select>
				</div>
			</div>
			<div className="col-8">
				<div className="mr-4">
					<form onSubmit={e => props.handleSubmit(e)}>
						<div className="input-group">
					      <input type="text" placeholder="Cari berita.." className="form-control" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)} />
					    <div className="input-group-append">
					       <button className="btn btn-primary" type="submit"><i className="fas fa-search"></i></button>
					    </div>
					  </div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Header