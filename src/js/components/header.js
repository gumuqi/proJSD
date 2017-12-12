import React from 'react';
import Menu 	  from './menu';
class Header extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div id="header">
				<div className="container">
					<div className="switch">
						<select>
							<option value="Chinese">中文</option>
							<option value="English">English</option>
						</select>
					</div>
					<div className="concat">联系我们：</div>
					<div className="logo">
						<img src={require("../../img/logo.png")} />
					</div>
					<Menu />
				</div>
			</div>
			
		)
	}
}

export default Header;