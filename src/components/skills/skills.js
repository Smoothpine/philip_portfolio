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
		<div className="w-100 pt5 pb2" style={{backgroundColor: "#f7f9fb", color: "#687864", fontFamily: 'Helvetica, system sans-serif'}}>
			<h2 className='tc f3 lh-copy ttu fw5 mb4' style={{fontFamily: 'Helvetica, system sans-serif'}}>Skills</h2>
			<h1 className="f4 mt4 mb0 tc pv3 ph5 fw2" style={{fontFamily: 'Helvetica, system sans-serif'}}>Web Technologies</h1>
			<div className="flex justify-center">
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2">
			    <Html style={{fill: "#687864"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2">
			    <Css style={{fill: "#687864"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2">
			    <JavaScript style={{fill: "#687864"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2">
			    <ReactLogo style={{fill: "#687864"}} />
			  </div>
			</div>
			<div className="flex justify-center">
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="tc f5 lh-copy">HTML5</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="tc f5 lh-copy">CSS3</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pt3 mr2">
			    <h1 className="tc f5 lh-copy">JavaScript</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="tc f5 lh-copy">React</h1>
			  </div>
			</div>
			<h1 className="f4 mt4 mb0 tc pv3 ph5 fw2" style={{fontFamily: 'Helvetica, system sans-serif'}}>Server & Databases</h1>
			<div className="flex justify-center">
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2">
			    <Node style={{fill: "#687864"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2">
			    <Express style={{fill: "#687864"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2">
			    <Postgres style={{fill: "#687864"}} />
			  </div>
			  <div className="outline mw-20 w-20 w-10-l pa3 mr2">
			    <MongoDB style={{fill: "#687864"}} />
			  </div>		  
			</div>
			<div className="flex justify-center mb5">
			  <div className="mw-20 w-20 w-10-l pa3 mr2">
			    <h1 className="tc f5 lh-copy tc">Node</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pt3 mr2">
			    <h1 className="tc f5 lh-copy tc">Express</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pt3 mr2">
			    <h1 className="tc f5 lh-copy tc">Postgres</h1>
			  </div>
			  <div className="mw-20 w-20 w-10-l pt3 mr2">
			    <h1 className="tc f5 lh-copy tc">MongoDB</h1>
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