import React 	from 'react';

class NewsDetail extends React.Component{
	constructor(){
		super();
	}
	render(){
		let detail = this.props.detail;
		return(
			<div className="news-detail">
				<h3 style={{"textAlign":"center"}}>{detail.name}</h3>
				<p>{detail.content}</p>
			</div>
		)
	}
}

export default NewsDetail;