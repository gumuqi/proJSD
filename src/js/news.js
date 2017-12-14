import React  from 'react';
import Concat from './components/concat/concat';
import NewList from './components/news/news';
import newsData  from '../data/news';

class News extends React.Component{
	constructor(){
		super();
	}
	getNews(){
		let type 	 = this.props.type;
		let newslist = [];
		for(var i=0; i<newsData.list.length; i++){
			newslist.push(newsData.list[i][type]);
		}
		return {
			title: newsData.title[type],
			list: newslist
		}
	}
	render(){
		let news  = this.getNews();

		return(
			<div>
				<div className="other-bg"></div>
				<div className="other-nav"></div>
				<div className="container clearfix">
					<Concat type={this.props.type} />
					<div className="main-cnt">
						<NewList title={news.title} list={news.list}/>
					</div>
				</div>
			</div>
		)
	}
}

export default News;