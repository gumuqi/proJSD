import React 	from 'react';

class NewsDetail extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="news-detail">
				<p>{this.props.detail}</p>
			</div>
		)
	}
}

export default NewsDetail;