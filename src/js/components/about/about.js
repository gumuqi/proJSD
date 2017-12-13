import React  from 'react';

class About extends React.Component{

	constructor(){
		super();
	}
	render(){
		return(
			<div className="about-p">
				<h3>{this.props.title}</h3>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

export default About;