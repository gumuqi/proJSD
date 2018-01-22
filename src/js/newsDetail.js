import React  from 'react';
import Concat from './components/concat/concat';
import NewDetail from './components/news/newsDetail';
import newsData  from '../data/news';


class News extends React.Component{
	constructor(){
		super();
		this.state = {
			//新闻的名称
			name: ''
		}
	}
	componentDidMount(){
		
	}
	getName(){
		let list  = location.href.split('?');
		let name = '';
		if(list.length>=2){
			let arr = list[1].split('=');
			if(arr.length>=2){
				name = arr[1];
			}
		}
		return name;
	}
	getNews(){
		let type   = this.props.type;
		let name   = this.getName();
		let list   = type=="Chinese"? newsData.Chinese : newsData.English;
		let detail = {};
		for(let i=0; i<list.length; i++){
			if(list[i].name == name){
				detail = list[i];
			}
		}
		return {
			title: type=="Chinese"? "企业新闻":"News",
			detail: detail
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