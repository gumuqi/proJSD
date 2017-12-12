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
const BasicExample = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/news" component={News}/>
      <Route path="/services" component={Services}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Footer />
    </div>
  </Router>
)

ReactDOM.render(<BasicExample/>, document.getElementById('content'));