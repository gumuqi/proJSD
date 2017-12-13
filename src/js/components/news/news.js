import React 	from 'react';

class News extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="news-l">
				<h3>{this.props.title}</h3>
				<ul>
				{
					this.props.list.map(function(item, index){
						return <li key={index}><a href="">{index}、{item}</a></li>
					})
				}
				</ul>
			</div>
		)
	}
}

export default News;