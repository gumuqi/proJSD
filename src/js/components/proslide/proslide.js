import React 	from 'react';

class Proslide extends React.Component{
	constructor(){
		super();
		this.state = {
			title: "",
			list: []
		}
	}
	render(){
		return(
			<div className="pro-slide">
				<ul>
				
				</ul>
			</div>
		)
	}
}

export default Proslide;