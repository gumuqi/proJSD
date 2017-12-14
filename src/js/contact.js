import React   from 'react';
import Concat  from './components/concat/concat';
import dataObj from '../data/concat';
class Contact extends React.Component{
	constructor(){
		super();
	}
	render(){
let type = this.props.type;
		let info = dataObj[type];
		let head = type=="Chinese"? "联系我们":"Concat Us";
		return(
			<div>
				<div className="other-bg"></div>
				<div className="other-nav"></div>
				<div className="container clearfix">
					<Concat type={this.props.type} />
					<div className="main-cnt">
						<div className="title">{head}</div>
						<p>{info.concats}</p>
						<p>{info.tel}</p>
						<p>{info.wechat}</p>
						<p>{info.addr}</p>
						<img src={require("../img/map.jpg")} style={{marginTop: "40px"}}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;