import React 	  from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header   from './components/header';
import Footer   from './components/footer';
import Home 	  from './home';
import News 	  from './news';
import Services from './services';
import About 	  from './about';
import Contact 	from './contact';
import '../css/common.less';

class BasicExample extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          type: "Chinese"
      }
  }
  changeLang(type){
      if(type!==this.state.type){
          this.setState({type: type});
      }
  }
  render(){
    let curType = this.state.type;
    return (
      <Router>
        <div>
          <Header type={curType} onChange={this.changeLang.bind(this)}/>
          <Route exact path="/" component={() => (<Home type={curType}/>)}/>
          <Route path="/news" component={() => (<News type={curType}/>)}/>
          <Route path="/services" component={() => (<Services type={curType}/>)}/>
          <Route path="/about" component={() => (<About type={curType}/>)}/>
          <Route path="/contact" component={() => (<Contact type={curType}/>)}/>
          <Footer type={curType}/>
        </div>
      </Router>
    )
  }
  
}

ReactDOM.render(<BasicExample/>, document.getElementById('content'));