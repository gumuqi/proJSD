import React  from 'react';
import dataObj from '../../../data/concat';

class Concat extends React.Component{
	constructor(){
		super();
	}
	render(){
		let type = this.props.type;
		let info = dataObj[type];
		let head = type=="Chinese"? "联系我们":"Concat Us";

		return(
			<div className="concat-left">
				<div className="header">{head}</div>
				<p className="title">{info.name}</p>
				<p>{info.addr}</p>
				<p>{info.tel}</p>
				<p>{info.wechat}</p>
			</div>
		)
	}
}

export default Concat;