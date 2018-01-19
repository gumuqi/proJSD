import React 	from 'react';
import Banner   from './components/banner/banner';
import About	from './components/about/about';
import News		from './components/news/news';
import Proslide from './components/Proslide/proslide';

import aboutData from '../data/about';
import newsData  from '../data/news';

let ImagesBG = [{
		src: './src/img/banner1.png'
	},{
		src: './src/img/banner2.png'
	},{
		src: './src/img/banner3.png'
	},{
		src: './src/img/banner4.png'
	},{
		src: './src/img/banner5.png'
	}];

let ImagesSL = [{
		src: './src/prolist/厚转塔标准系列/DSC_6091-厚塔模具A工位打点模（样冲模）.jpg'
	},{
		src: './src/prolist/厚转塔90系列/DSC_6089-厚塔模具A工位90系列.jpg'
	},{
		src: './src/prolist/薄转塔系列模具/DSC_6124-薄转塔系列模具.jpg'
	},{
		src: './src/prolist/通快系列/DSC_6087-厚塔模具A工位快调系列.jpg'
	},{
		src: './src/prolist/通快系列/DSC_6096-厚塔模具B工位快调系列.jpg'
	},{
		src: './src/prolist/通快系列/DSC_6121-通块系列模具.jpg'
	},{
		src: './src/prolist/重载系列模具/DSC_6098-厚塔模具B工位重载系列.jpg'
	},{
		src: './src/prolist/重载系列模具/DSC_6098-厚塔模具B工位重载系列.jpg'
	}];

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

		return {
			title: type=="Chinese"? "企业新闻":"News",
			list: type=="Chinese"? newsData.Chinese:newsData.English
		}
	}
	render(){
		let about = this.getAbout();
		let news  = this.getNews();
		return(
			<div>
				<Banner width="1200" images={ImagesBG}/>
				<div className="about-news">
					<div className="container">
						<About title={about.title} content={about.content}/>
						<News title={news.title} list={news.list}/>
					</div>
				</div>
				<Banner width="200" classSlide="pro-slide" images={ImagesSL}/>
			</div>
		)
	}
}

export default Home;