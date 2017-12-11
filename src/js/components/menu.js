import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<ul>
				<li><Link to="/">首页</Link></li>
				<li><Link to="/news">企业新闻</Link></li>
				<li><Link to="/services">产品服务</Link></li>
				<li><Link to="/about">关于我们</Link></li>
				<li><Link to="/contact">联系我们</Link></li>
			</ul>
		)
	}
}

export default Menu;