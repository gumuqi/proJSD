import React 	  from 'react';
import Menu 	  from './menu';
import Dropdown   from './dropdown/dropdown';

let dropList = [{name:"中文", value:"Chinese"},{name:"English", value:"English"}];

class Header extends React.Component{
	static defaultProps = {
		onChange: function(){}
	}
	$on(key, fn) {
		if(!this._list) {
			this._list = {};
		}
		if (!this._list[key]) {
			this._list[key] = [];
		}
		this._list[key].push(fn);
	}
	$emit() {
		var args = Array.prototype.slice.call(arguments);
		var key = args[0];
		var arrFn = this._list && this._list[key];
		if (!arrFn || arrFn.length === 0) {
			return;
		}
		for (var i = 0; i < arrFn.length; i++) {
			if( typeof arrFn[i] == 'function') {
				arrFn[i].apply(this, args);
			}
		}
	}
	constructor(){
		super()
	}
	render(){
		let type = this.props.type;
		let text = type=="Chinese"? "联系我们：":"Concat Us"
		return(
			<div id="header">
				<div className="container">
					<Dropdown onChange={this.props.onChange} list={dropList} value="Chinese"></Dropdown>
					<div className="concat"><span>{text}</span><img src={require("../../img/weixin.png")} /></div>
					<div className="logo">
						<img src={require("../../img/logo.png")} />
					</div>
					<Menu type={type}/>
				</div>
			</div>
			
		)
	}
}

export default Header;