import React from 'react';
import {ReactComponent as Html} from "./assets/html5.svg";
import {ReactComponent as Css} from "./assets/css3.svg";
import {ReactComponent as JavaScript} from "./assets/javascript.svg";
import {ReactComponent as ReactLogo} from "./assets/react.svg";
import {ReactComponent as Node} from "./assets/nodejs.svg";
import {ReactComponent as Express} from "./assets/express.svg";
import {ReactComponent as Postgres} from "./assets/postgresql.svg";
import {ReactComponent as MongoDB} from "./assets/mongodb.svg";


const skills = () => {
	return(
		<div className="w-100 pt5 pb2" style={{backgroundColor: "#2F9C83", color: "#f7f9fb", fontFamily: 'Helvetica, system sans-serif'}}>
			<h2 className='tc f3 lh-copy ttu fw5 mb4' style={{fontFamily: 'Helvetica, system sans-serif'}}>Skills</h2>
			<h1 className="f4 mt4 mb0 tc pv3 ph5 fw4" style={{fontFamily: 'Helvetica, system sans-serif'}}>Web Technologies</h1>
			<div className="flex justify-center">
			  <div className="outline w-20 w-10-l pa3 mh1">
			    <Html style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline w-20 w-10-l pa3 mh1">
			    <Css style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline w-20 w-10-l pa3 mh1">
			    <JavaScript style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline w-20 w-10-l pa3 mh1">
			    <ReactLogo style={{fill: "#f7f9fb"}} />
			  </div>
			</div>
			<div className="flex justify-center">
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw2">HTML5</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw2">CSS3</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw2">JavaScript</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw2">React</h1>
			  </div>
			</div>
			<h1 className="f4 mt4 mb0 tc pv3 ph5 fw4" style={{fontFamily: 'Helvetica, system sans-serif'}}>Server & Databases</h1>
			<div className="flex justify-center">
			  <div className="outline mw-20 w-20 w-10-l pa3 mh1">
			    <Node style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mh1">
			    <Express style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mh1">
			    <Postgres style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mh1">
			    <MongoDB style={{fill: "#f7f9fb"}} />
			  </div>		  
			</div>
			<div className="flex justify-center mb5">
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw2">Node</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw2">Express</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw2">Postgres</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw2">MongoDB</h1>
			  </div>
			  {/*
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="f5 lh-copy tc">Git</h1>
			  </div>
				*/}
			</div>    
		</div>
	);
}

export default skills;