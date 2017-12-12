import React from 'react';

class Footer extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div id="footer">
				<div className="container">
					<div className="info-wrap">
						<div className="map"><img src={require("../../img/addr.jpg")} /></div>
						<div className="info"></div>
						<div className="qrcode"></div>
					</div>
					<div className="right">Copyright ©2017 Jinsd Powered By chuangzhe  technology.</div>
				</div>
			</div>
		)
	}
}

export default Footer;