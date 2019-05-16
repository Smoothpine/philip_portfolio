import React from 'react';
import './style.css'
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
		<div className="w-100 pt5" style={{backgroundColor: "#32A0A6", color: "#f7f9fb", fontFamily: 'Helvetica, system sans-serif', paddingBottom: "2.45rem"}}>
			<h2 className='tc f3 ttu fw5 lh-copy' style={{fontFamily: 'Helvetica, system sans-serif', letterSpacing: "0.03em"}}>Skills</h2>
			<h1 className="f4 mt0 mb0 tc pv3 ph5 fw4" style={{fontFamily: 'Helvetica, system sans-serif'}}>Web Technologies</h1>
			<div className="flex justify-center">
			  <div className="w-20 w-10-l pa3 mh1">
			    <Html style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="w-20 w-10-l pa3 mh1">
			    <Css style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="w-20 w-10-l pa3 mh1">
			    <JavaScript style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="w-20 w-10-l pa3 mh1">
			    <ReactLogo style={{fill: "#f7f9fb"}} />
			  </div>
			</div>
			<div className="flex justify-center">
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw3" style={{marginTop: "-0.8em"}}>HTML5</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw3" style={{marginTop: "-0.8em"}}>CSS3</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw3" style={{marginTop: "-0.8em"}}>JavaScript</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw3" style={{marginTop: "-0.8em"}}>React</h1>
			  </div>
			</div>
			<h1 className="f4 mt4 mb0 tc pv3 ph5 fw4" style={{fontFamily: 'Helvetica, system sans-serif'}}>Server & Databases</h1>
			<div className="flex justify-center">
			  <div className="mw-20 w-20 w-10-l pa3 mh1">
			    <Node style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="mw-20 w-20 w-10-l pa3 mh1">
			    <Express style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="mw-20 w-20 w-10-l pa3 mh1">
			    <Postgres style={{fill: "#f7f9fb"}} />
			  </div>
			  <div className="mw-20 w-20 w-10-l pa3 mh1">
			    <MongoDB style={{fill: "#f7f9fb"}} />
			  </div>		  
			</div>
			<div className="flex justify-center mb5">
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw3" style={{marginTop: "-0.8em"}}>Node</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw3" style={{marginTop: "-0.8em"}}>Express</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw3" style={{marginTop: "-0.8em"}}>Postgres</h1>
			  </div>
			  <div className="w-20 w-10-l mh1">
			    <h1 className="tc f6 f5-m lh-copy fw3" style={{marginTop: "-0.8em"}}>MongoDB</h1>
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