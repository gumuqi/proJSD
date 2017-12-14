import React from 'react';
import Concat from './components/concat/concat';
import AboutSub	from './components/about/about';
import aboutData from '../data/about';

class About extends React.Component{
	constructor(){
		super();
	}
	getAbout(){
		let type = this.props.type;
		return {
			title: aboutData[type].title,
			content: aboutData[type].content
		}
	}
	render(){
		let about = this.getAbout();

		return(
			<div>
				<div className="other-bg"></div>
				<div className="other-nav"></div>
				<div className="container clearfix">
					<Concat type={this.props.type} />
					<div className="main-cnt">
						<AboutSub title={about.title} content={about.content}/>
					</div>
				</div>
			</div>
		)
	}
}

export default About;