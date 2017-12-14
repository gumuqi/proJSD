import React from 'react';
import Concat  from './concat/concat';

class Footer extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div id="footer">
				<div className="container">
					<div className="info-wrap">
						<div className="map">
							<img src={require("../../img/addr.jpg")} />
						</div>
						<div className="info">
							<h3>联系方式:</h3>
							<span>联系人：陈学锋先生</span>
							<span>电话：+86 0514 87757590</span>
							<span>传真：+86 0514 87757359</span>
							<span>地址: 中国 江苏 扬州市邗江区 酒甸工业区弘扬西路</span>						</div>
						<div className="qrcode">
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