import React 	from 'react';

let imgList = [];
class Proslide extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="pro-slide">
				<ul className="clearfix">
					<li><img src="./src/prolist/厚转塔标准系列/DSC_6091-厚塔模具A工位打点模（样冲模）.jpg" /></li>
					<li><img src="./src/prolist/厚转塔90系列/DSC_6089-厚塔模具A工位90系列.jpg" /></li>
					<li><img src="./src/prolist/薄转塔系列模具/DSC_6124-薄转塔系列模具.jpg" /></li>
					<li><img src="./src/prolist/通快系列/DSC_6087-厚塔模具A工位快调系列.jpg" /></li>
				</ul>
			</div>
		)
	}
}

export default Proslide;