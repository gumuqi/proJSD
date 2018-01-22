import React 	from 'react';

class NewsDetail extends React.Component{
	constructor(){
		super();
	}
	render(){
		let type   = this.props.type;
		let detail = this.props.detail;
		return(
			<div className="news-detail">
				<iframe src={"/src/doc/news/"+type+"/"+detail.name+".html"}></iframe>
			</div>
		)
	}
}

export default NewsDetail;