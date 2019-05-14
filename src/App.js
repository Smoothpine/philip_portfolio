import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import Introduction from './components/introduction/introduction';
import Icons from './components/icons';
import About from './components/about';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact';

class App extends Component {
  render(){
    return (
      
      <div className="App ">
        <Introduction />
        <Icons />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
