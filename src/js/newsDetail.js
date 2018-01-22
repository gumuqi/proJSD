import React  from 'react';
import Concat from './components/concat/concat';
import NewDetail from './components/news/newsDetail';
import newsData  from '../data/news';


class News extends React.Component{
	constructor(){
		super();
		this.state = {
			//新闻的序列号
			index: 0
		}
	}
	componentDidMount(){
		let list = location.href.split('?');
		if(list.length>=2){
			let arr = list[1].split('=');
			if(arr.length>=2){
				this.state.index = arr[1];
			}
		}
	}
	getNews(){
		let type  = this.props.type;
		let index = this.state.index;
		return {
			title: type=="Chinese"? "企业新闻":"News",
			detail: type=="Chinese"? newsData.Chinese[index] : newsData.English[index]
		}
	}
	render(){
		let type  = this.props.type;
		let news  = this.getNews();
		return(
			<div>
				<div className="other-bg"></div>
				<div className="other-nav"></div>
				<div className="container clearfix">
					<Concat type={type} />
					<div className="main-cnt">
						<NewDetail type={type} detail={news.detail}/>
					</div>
				</div>
			</div>
		)
	}
}

export default News;