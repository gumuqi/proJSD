import React from 'react';

class BannerDots extends React.Component{
    constructor(props){
        super(props);
    }
    handleDotClick(i){
        this.props.turn(i, "dots");
    }
    render(){
        let dotNodes = [];
        let {count, nowLocal} = this.props;
        for(let i = 0; i < count; i++){
            dotNodes.push(
                <span
                key={'dot' + i}
                className={"slide-dot " + ((i === nowLocal) ? "slider-dot-selected" : "")}
                onClick={this.handleDotClick.bind(this, i)}>
                </span>
            )
        }

        return (
          <div id="slide-dot-box">
              {dotNodes}
          </div>
        );
    }
}

export default BannerDots;