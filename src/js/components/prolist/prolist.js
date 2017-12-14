import React 	from 'react';

class Prolist extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="pro-l">
				<ul>
				{
					this.props.list.map(function(item, index){
						return <li key={index}><img src={item.src} /></li>
					})
				}
				</ul>
			</div>
		)
	}
}

export default Prolist;