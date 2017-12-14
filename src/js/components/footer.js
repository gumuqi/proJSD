import React from 'react';
import dataObj from '../../data/concat';

class Footer extends React.Component{
	constructor(){
		super()
	}
	render(){
		let type = this.props.type;
		let info = dataObj[type];
		let head = type=="Chinese"? "联系方式":"Concat Type";

		return(
			<div id="footer">
				<div className="container">
					<div className="info-wrap">
						<div className="map">
							<img src={require("../../img/addr.jpg")} />
						</div>
						<div className="info">
							<h3>联系方式:</h3>
							<span>{info.concats}</span>
							<span>{info.tel}</span>
							<span>{info.addr}</span>
							<div className="qrcode"></div>
							<img src={require("../../img/qrcode.jpg")} />
						</div>
					</div>
					<div className="right">Copyright ©2017 Jinsd Powered By chuangzhe  technology.</div>
				</div>
			</div>
		)
	}
}

export default Footer;