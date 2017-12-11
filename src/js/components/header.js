import React from 'react';

class Header extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<select>
				<option value="Chinese">中文</option>
				<option value="English">English</option>
			</select>
		)
	}
}

export default Header;