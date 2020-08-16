import React, {Component} from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import CV from './Pages/CV';
import Projects from './Pages/Projects';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="top-bar">
        <h1>MA SITE!</h1>
      </div>  
      <div>
        <div className="content-selector">
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/cv">Curriculum vitae</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>
        </div>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/cv" component={CV}/>
          <Route path="/projects" component={Projects}/>
        </div>
      </div>
      </HashRouter>
    )
  }
}

export default App;