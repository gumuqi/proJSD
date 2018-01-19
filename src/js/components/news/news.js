import React 	from 'react';
class News extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="news-l">
				<div className="title">{this.props.title}</div>
				<ul>
				{
					this.props.list.map(function(item, index){
						return <li key={index}><a href={"/#/newsDetail?index="+index}>{item.name}</a></li>
					})
				}
				</ul>
			</div>
		)
	}
}

export default News;