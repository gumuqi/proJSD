import React  from 'react';

class About extends React.Component{

	constructor(){
		super();
	}
	render(){
		return(
			<div className="about-p">
				<div className="title">{this.props.title}</div>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

export default About;