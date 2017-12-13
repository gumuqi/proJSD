import React from 'react';

class DropDown extends React.Component{

	static defaultProps = {
		onChange: function(){}
	}
	constructor(props){
		super(props);
		this.state = {
			open: false
		}
	}
	componentDidMount(){
        this.setState({value: this.props.value});
    }

	mousedownOut(e){
        for(var node = e.target;node;node = node.parentNode)
            if(this.refs.me == node) return;
        this.shrink();
    }

    shrink() {
        this.setState({open: false});
        removeEventListener("mousedown", this.mousedownOut);
    }
    
    toggle() {
        !this.state.open && addEventListener("mousedown", this.mousedownOut);
        this.setState({open: !this.state.open});        
    }

	select(value) {
		if (this.state.value !== value) {
			this.props.onChange(value);
			this.shrink();
            this.setState({value},()=>this.props.onChange && this.props.onChange(value));
		}
	}

	render() {
		let list = this.props.list || [];
		//如果list是key-value形式的数据，则自动转换成[{name:'',value:''}]格式
		if (typeof list === 'object' && !Array.isArray(list)) {
			list = Object.keys(list).map(key=>({
				name: list[key],
				value: key
			}));
		}
		//如果list是字符串数组
		list = list.map(o=>typeof o === 'string' ? {name:o, value: o} : o);

		let selected = this.state.value;
		let title = list.find(o=>o.value==selected);
		title = title && title.name || '';

		return 	<div ref="me" className="dropDown switch">
					<div className="btn" onClick={this.toggle.bind(this)}>
						<span className="title">{title}</span>
						<span className="arrow"><img src={require("../../../img/dropdown-arrow.png")} /></span>
					</div>	
					<div style={{display: this.state.open ? 'block' : 'none'}}>
						<ul>
							{list.map(o=><li 
								key={o.value} 
								className={o.value == selected? "active":""}
								onClick={()=>this.select(o.value)}>
								{o.name}
							</li>)}
						</ul>
					</div>
				</div>
	}
}

export default DropDown;