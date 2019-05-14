import React from 'react';
import {ReactComponent as Html} from "./assets/html5.svg";
import {ReactComponent as Css} from "./assets/css3.svg";
import {ReactComponent as JavaScript} from "./assets/javascript.svg";
import {ReactComponent as ReactLogo} from "./assets/react.svg";
import {ReactComponent as Node} from "./assets/node-dot-js.svg";
import {ReactComponent as Postgres} from "./assets/postgresql.svg";
import {ReactComponent as MongoDB} from "./assets/mongodb.svg";
import {ReactComponent as Git} from "./assets/git.svg";

const skills = () => {
	return(
		<div className="w-100 pt5 pb2" style={{backgroundColor: "#687864", color: "#f7f9fb"}}>
			<h2 className='tc f3 lh-copy ttu fw5 mb2' style={{fontFamily: 'Helvetica, system sans-serif'}}>Skills</h2>
			<div className="flex justify-center">
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2 dim">
			    <Html style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2 dim">
			    <Css style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2 dim">
			    <JavaScript style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2 dim">
			    <ReactLogo style={{fill: "#f7f9fb"}} />
			  </div>
			</div>
			<div className="flex justify-center">
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="f5 lh-copy">HTML5</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="f5 lh-copy">CSS3</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pt3 mr2">
			    <h1 className="f5 lh-copy">JavaScript</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="f5 lh-copy">React</h1>
			  </div>
			</div>
			<div className="flex justify-center">
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2 dim">
			    <Node style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2 dim">
			    <Postgres style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2 dim">
			    <MongoDB style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2 dim">
			    <Git style={{fill: "#f7f9fb"}} />
			  </div>		  
			</div>
			<div className="flex justify-center mb5">
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="f5 lh-copy tc">Node</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pt3 mr2">
			    <h1 className="f5 lh-copy tc">Postgres</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pt3 mr2">
			    <h1 className="f5 lh-copy tc">MongoDB</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="f5 lh-copy tc">Git</h1>
			  </div>
			</div>    
		</div>
	);
}

export default skills;