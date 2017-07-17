import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';



class AdminList extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return(
			<div>404 AdminList</div>
		)
	}
}
export default AdminList