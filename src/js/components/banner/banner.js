import React from 'react';
import BannerItem from './bannerItem';
import BannerDots from './bannerDots';

let Images = [{
		src:'../../../img/banner1.jpg'
	},{
		src:'../../../img/banner1.jpg'
	},{
		src:'../../../img/banner1.jpg'
	},{
		src:'../../../img/banner1.jpg'
	},{
		src:'../../../img/banner1.jpg'
	}];

class Banner extends React.Component{
	static defaultProps = {
		width: 800
	}
    constructor(props){
        super(props);
        this.state = {
            curIndex: 0
        };
        this.count = 6;
        this.transition = "all 0.8s linear";
        this.time = null;
    }
    turn(n, type){
        let _n;
        type = type || null;
        switch (type){
            case null:
                _n = this.state.curIndex + n;
                break;
            case "dots":
                _n = n;
                break;
            default: return;
        }
        if(_n == this.count){
            this.transition = "none";
        }else{
            this.transition = "all 0.8s linear";
        }
        if(_n < 0){
            _n = _n + this.count;
        }
        if(_n >= this.count){
            _n = _n - this.count;
        }
        this.setState({curIndex: _n});
    }
    goplay(){
        this.time = setInterval(() => {
            this.turn(1);
        },1000);
    }
    pause(){
        clearInterval(this.time);
        this.time = null;
    }
    componentDidMount(){
        this.goplay();
    }
    render(){
        let ImageLi = [];
        Images.forEach((item, i) => {
           ImageLi.push(<BannerItem key={i} item={item} count={this.count}/>);
        });
        ImageLi.push(<BannerItem key={this.count - 1} item={Images[0]} count={this.count}/>);

        let width = this.props.width * (this.count);
        return(
            <section id="container" onMouseOver={this.pause.bind(this)} onMouseOut={this.goplay.bind(this)}>
                <ul id="banner" style={{width: width,position: 'relative',top: 0, left: '-800' * this.state.curIndex + 'px', transition: this.transition}}>
                    {ImageLi}
                </ul>
                <BannerDots count={this.count - 1} turn={this.turn.bind(this)} nowLocal={this.state.curIndex === (this.count - 1) ? 0 : this.state.curIndex}/>
            </section>

        )
    }
}

export default Banner;