import React 	from 'react';

class NewsDetail extends React.Component{
	constructor(){
		super();
	}
	changeFrameHeight(){
		var ifm    = this.refs.iframe; 
		ifm.height = ifm.contentWindow.document.body.scrollHeight;
	}
	render(){
		let type   = this.props.type;
		let detail = this.props.detail;
		return(
			<div className="news-detail">
				<iframe ref="iframe" onLoad={this.changeFrameHeight.bind(this)} src={"/src/doc/news/"+type+"/"+detail.name+".html"}></iframe>
			</div>
		)
	}
}

export default NewsDetail;