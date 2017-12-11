import React from 'react';

class Footer extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div id="footer">
				<div className="container">
					<div>
						<div className="map"></div>
						<div className="info"></div>
						<div className="qrcode"></div>
					</div>
					<div className="right"></div>
				</div>
			</div>
		)
	}
}

export default Footer;