import React from 'react';
import Concat from './components/concat/concat';
import Prolist from './components/prolist/prolist';
import allImg from '../data/product';

class Index extends React.Component{
	constructor(){
		super();
		this.state = {
			proType: "厚转塔标准系列"
		}
	}
	getProlist(){
		let list  = [];
		let index = 1;
		for(let name in allImg){
			list.push(<li key={name} onClick={this.changeProtype.bind(this, name)}>{index+"、"+name}</li>);
				index++;
		}
		return list;
	}
	changeProtype(name){
		this.setState({proType: name});
	}
	render(){
		let imglist = allImg[this.state.proType];
		let prolist = this.getProlist();
		let type = this.props.type;
		let head = type=="Chinese"? "产品系列":"Product";

		return(
			<div>
				<div className="other-bg"></div>
				<div className="other-nav"></div>
				<div className="container clearfix">
					<div className="services-prolist">
						<div className="header">{head}</div>
						<ul>{prolist}</ul>
					</div>
					<div className="main-cnt">
						<Prolist list={imglist} />
					</div>
				</div>
			</div>
		)
	}
}

export default Index;