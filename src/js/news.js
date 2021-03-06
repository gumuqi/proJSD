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

		return {
			title: type=="Chinese"? "企业新闻":"News",
			list: type=="Chinese"? newsData.Chinese:newsData.English
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