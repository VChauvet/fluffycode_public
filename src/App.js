import React, {Component} from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import CV from './Pages/CV';
import Projects from './Pages/Projects';

function App(props) {



    return (
      <>
      <HashRouter>
      <div className="top-bar">
        <h1>fluffycode</h1>
      </div>  
      <div>
        <div className="content-selector">
          <ul>
            <li><NavLink exact to="/"><div className="brackets" />Home</NavLink></li>
            <li><NavLink to="/cv"><div className="brackets" />Curriculum Vitae</NavLink></li>
            <li><NavLink to="/projects"><div className="brackets" />Projects</NavLink></li>
          </ul>
        </div>
      <div>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/cv" component={CV}/>
          <Route path="/projects" component={Projects}/>
        </div>
      </div>
      </div>
      </HashRouter>
      <div className="footer">
        
      </div>
      </>
    )

}

export default App;
