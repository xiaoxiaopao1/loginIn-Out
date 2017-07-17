import React from 'react';
import { Router,Route,IndexRoute } from 'react-router';

import App from '../containers';
import LoginAndSign from '../containers/LoginAndSign';
import Detail from '../containers/Detail';
import AdminList from '../containers/AdminList';
import AdminEnter from '../containers/AdminEnter';
import NotFound from '../containers/404'



class RouterMap extends React.Component {
	render(){
		return(
			<Router history={this.props.history} >
				<Route path='/' component={ App }>
					<IndexRoute component = { LoginAndSign } />
					<Route path='/detail/:id' component={ Detail } />
					<Route path='/admin/list' component={ AdminList } />
					<Route path='/admin/enter' component={ AdminEnter } />
					<Route path='*' component={ NotFound } />
				</Route>
			</Router>
		)
	}
}
export default RouterMap