import React 	from 'react';

class About extends React.Component{
	constructor(){
		super();
		this.state = {
			title: "关于我们",
			paragraph: "惺惺惜惺惺想寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻"
		}
	}
	render(){
		return(
			<div className="about-p">
				<h3>{this.state.title}</h3>
				<p>{this.state.paragraph}</p>
			</div>
		)
	}
}

export default About;