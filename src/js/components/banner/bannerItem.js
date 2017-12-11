import React from 'react';

class BannerItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        let {item, count} = this.props;
        let width = 100/count + "%";
        return(
            <li style={{width: width}}>
                <img src={item.src} alt={item.alt}/>
            </li>
        )
    }
}

export default BannerItem;