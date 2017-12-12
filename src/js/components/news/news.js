import React 	from 'react';

class News extends React.Component{
	constructor(){
		super();
		this.state = {
			title: "企业新闻",
			list: ["惺惺惜惺惺想寻寻寻寻寻寻寻","灌灌灌灌灌过过过过过过过"]
		}
	}
	render(){
		return(
			<div className="news-l">
				<h3>{this.state.title}</h3>
				<ul>
				{
					this.state.list.map(function(item, index){
						return <li key={index}><a href="">{index}、{item}</a></li>
					})
				}
				</ul>
			</div>
		)
	}
}

export default News;