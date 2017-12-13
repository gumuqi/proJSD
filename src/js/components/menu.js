import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<ul className="menu clearfix">
				<li><NavLink activeClass="active" to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首 页</NavLink><div className="bg-line"></div></li>
				<li><NavLink activeClass="active" to="/news">企业新闻</NavLink><div className="bg-line"></div></li>
				<li>
					<NavLink activeClass="active" to="/services">产品服务</NavLink><div className="bg-line"></div>
					<a className="cd-wrap" href="../../doc/产品介绍.pdf"><img src={require("../../img/CD.png")} /></a>
				</li>
				<li><NavLink activeClass="active" to="/about">关于我们</NavLink><div className="bg-line"></div></li>
				<li><NavLink activeClass="active" to="/contact">联系我们</NavLink><div className="bg-line"></div></li>
			</ul>
		)
	}
}

export default Menu;