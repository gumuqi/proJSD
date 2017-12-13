import React from 'react';
import Concat from './components/concat/concat';

class Index extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<div className="other-bg"></div>
				<div className="other-nav"></div>
				<div className="container clearfix">
					<Concat type={this.props.type} />
					<div className="main-cnt"></div>
				</div>
			</div>
		)
	}
}

export default Index;