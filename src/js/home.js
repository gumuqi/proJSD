import React 	from 'react';
import Banner   from './components/banner/banner';
import About	from './components/about/about';
import News		from './components/news/news';
import Proslide from './components/Proslide/proslide';

import aboutData from '../data/about';
import newsData  from '../data/news';

class Home extends React.Component{
	constructor(props){
		super(props);
	}
	getAbout(){
		let type = this.props.type;
		return {
			title: aboutData[type].title,
			content: aboutData[type].content
		}
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
		let about = this.getAbout();
		let news  = this.getNews();
		return(
			<div>
				<Banner />
				<div className="about-news">
					<div className="container">
						<About title={about.title} content={about.content}/>
						<News title={news.title} list={news.list}/>
					</div>
				</div>
				<div className="container">
					<Proslide />
				</div>
			</div>
		)
	}
}

export default Home;