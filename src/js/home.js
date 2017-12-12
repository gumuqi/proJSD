import React 	from 'react';
import Banner   from './components/banner/banner';
import About	from './components/about/about';
import News		from './components/news/news';
import Proslide from './components/Proslide/proslide';

class Home extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<Banner />
				<div className="about-news">
					<div className="container">
						<About />
						<News />
					</div>
				</div>
				<Proslide />
			</div>
		)
	}
}

export default Home;