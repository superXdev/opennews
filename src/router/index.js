import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Stats from '../views/Stats'
import NotFound from '../views/errors/NotFound'
import Tag from '../views/Tag'
import Source from '../views/Source'

function Router(props) {
	return (
		<Switch>
			<Route exact path='/'>
				<Home/>
			</Route>
			<Route exact path='/tag/:tagname'>
				<Tag/>
			</Route>
			<Route path='/cnn'>
				<Source source='cnn' />
			</Route>
			<Route path='/kompas'>
				<Source source='kompas' />
			</Route>
			<Route path='/liputan6'>
				<Source source='liputan6' />
			</Route>
			<Route path='/stats'>
				<Stats/>
			</Route>
			<Route path='*'>
				<NotFound/>
			</Route>
		</Switch>
	)
}

export default Router