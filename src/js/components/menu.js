import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component{
	constructor(){
		super()
	}
	download(){
		try{ 
            var elemIF = document.createElement("iframe");   
            elemIF.src = "/src/doc/产品介绍.pdf";   
            elemIF.style.display = "none";   
            document.body.appendChild(elemIF);   
        }catch(e){ 
 
        } 
	}
	render(){
		let type 	 = this.props.type;
		let home 	 = type=="Chinese"? "首 页":"Home";
		let news 	 = type=="Chinese"? "企业新闻":"News";
		let services = type=="Chinese"? "产品服务":"Services";
		let about 	 = type=="Chinese"? "关于我们":"About";
		let contact  = type=="Chinese"? "联系我们":"Contact";
		return(
			<ul className="menu clearfix">
				<li><NavLink activeClass="active" to="/" exact>{home}</NavLink><div className="bg-line"></div></li>
				<li><NavLink activeClass="active" to="/news" exact>{news}</NavLink><div className="bg-line"></div></li>
				<li>
					<NavLink activeClass="active" to="/services" exact>{services}</NavLink><div className="bg-line"></div>
					<a className="cd-wrap" title="下载电子文档" href="/src/doc/产品介绍.pdf"><img src={require("../../img/CD.png")} /></a>
				</li>
				<li><NavLink activeClass="active" to="/about" exact>{about}</NavLink><div className="bg-line"></div></li>
				<li><NavLink activeClass="active" to="/contact" exact>{contact}</NavLink><div className="bg-line"></div></li>
			</ul>
		)
	}
}

export default Menu;