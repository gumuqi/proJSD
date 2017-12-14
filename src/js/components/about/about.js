import React  from 'react';

class About extends React.Component{

	constructor(){
		super();
	}
	render(){
		return(
			<div className="about-p">
				<div className="title">{this.props.title}</div>
				{
					this.props.content.map(function(item, index){
						if(index<4){
							return <p key={index}><span style={{width:"30px",height:"22px",display:"inline-block"}}></span>{item}</p>
						}else{
							return <p key={index}>......</p>
						}
						
					})
				}
			</div>
		)
	}
}

export default About;