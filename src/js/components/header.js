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
					<div>
						<select>
							<option value="Chinese">中文</option>
							<option value="English">English</option>
						</select>
						<div className="con-icon">联系我们：</div>
					</div>
					<div>
						<div id="logo"></div>
						<Menu />
					</div>
				</div>
			</div>
			
		)
	}
}

export default Header;