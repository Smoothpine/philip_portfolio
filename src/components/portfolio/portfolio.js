import React from 'react';

const portfolio = () => {
	return(
		<div className="w-100 pt5 mb2" style={{backgroundColor: "#f7f9fb", color: "#5085a5"}}>
		<div className="w-90 center">
			<h2 className='tc f3 lh-copy ttu fw5 mb4' style={{fontFamily: 'Helvetica, system sans-serif'}}>Projects</h2>
			<div className="flex flex-wrap mt0">
				<div className="w-100 hidden" >
		  		<h1 className="f4 mt4 mb0 tc pv3 ph5 fw2" style={{fontFamily: 'Helvetica, system sans-serif'}}>Photogenic</h1>
		  		<hr className="mw3 bb b--black-10" />
		  		<div className="pa3">
		    		<p className="f6 f5-ns lh-copy measure mv1 tc center" style={{fontFamily: 'Georgia, system serif'}}>
				      	An application utilizing a machine learning API to detect multiple human faces within a single photograph. It has user registration and login functionality.
		   		 </p>
		  		</div>
		  		<div className="pa3">
		  			<p className="tc f6 f5-ns lh-copy measure mv1 flex-end center fw5" style={{fontFamily: 'Helvetica, system serif'}}>
		  					<a className="f6 link dim ba bw1 ttu ph3 pv2 mb2 dib mr1 w-50 w-40-l" style={{backgroundColor: "#687864", color: "#f7f9fb", borderColor: "#687864"}} href="https://photogenic-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go to Project</a>
		  					<a className="f6 link dim ba bw1 ttu ph3 pv2 mb2 dib mr1 w-50 w-40-l" style={{backgroundColor: "#687864", color: "#f7f9fb", borderColor: "#687864"}} href="https://github.com/Smoothpine/Photogenic-app" target="_blank" rel="noopener noreferrer">Source Code</a>
		  			</p>
		  		</div>
				</div>
				<div className="w-100 hidden bt b--black-10">
		  		<h1 className="f4 mt4 mb0 tc pv3 ph5 fw2" style={{fontFamily: 'Helvetica, system sans-serif'}}>YelpCamp</h1>
		  		<hr className="mw3 bb b--black-10" />
		  		<div className="pa3">
		    		<p className="f6 f5-ns lh-copy measure mv1 tc center" style={{fontFamily: 'Georgia, system serif'}}>
				      	A site made for camping enthusiasts, to share and comment on the pictures of campgrounds they’ve visited. Includes user registration and login functionality. It is made with authentication in mind.
		   		 </p>
		  		</div>
		  		<div className="pa3">
		  			<p className="tc f6 f5-ns lh-copy measure mv1 flex-end center fw5" style={{fontFamily: 'Helvetica, system serif'}}>
		  					<a className="f6 link dim ba bw1 ttu ph3 pv2 mb2 dib mr1 w-50 w-40-l" style={{backgroundColor: "#687864", color: "#f7f9fb", borderColor: "#687864"}} href="https://mighty-shore-29205.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go to Project</a>
		  					<a className="f6 link dim ba bw1 ttu ph3 pv2 mb2 dib mr1 w-50 w-40-l" style={{backgroundColor: "#687864", color: "#f7f9fb", borderColor: "#687864"}} href="https://github.com/Smoothpine/Yelp-Camp" target="_blank" rel="noopener noreferrer">Source Code</a>
		  			</p>
		  		</div>
				</div>
				<div className="w-100 hidden bt b--black-10 pb5">
		  		<h1 className="f4 mt4 mb0 tc pv3 ph5 fw2" style={{fontFamily: 'Helvetica, system sans-serif'}}>DevMatch</h1>
		  		<hr className="mw3 bb b--black-10" />
		  		<div className="pa3">
		    		<p className="f6 f5-ns lh-copy measure mv1 tc center" style={{fontFamily: 'Georgia, system serif'}}>
				      	A site that has two forms of user registration, free and premium, with actual e-commerce functionality. When the user pays for the premium membership, their card information is handled and secured by a Stripe API.
		   		 </p>
		  		</div>
		  		<div className="pa3">
		  			<p className="tc f6 f5-ns lh-copy measure mv1 flex-end center fw5" style={{fontFamily: 'Helvetica, system serif'}}>
		  					<a className="f6 link dim ba bw1 ttu ph3 pv2 mb2 dib mr1 w-50 w-40-l" style={{backgroundColor: "#687864", color: "#f7f9fb", borderColor: "#687864"}} href="http://young-sands-95084.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go to Project</a>
		  					<a className="f6 link dim ba bw1 ttu ph3 pv2 mb2 dib mr1 w-50 w-40-l" style={{backgroundColor: "#687864", color: "#f7f9fb", borderColor: "#687864"}} href="https://github.com/Smoothpine/DevMatch" target="_blank" rel="noopener noreferrer">Source Code</a>
		  			</p>
		  		</div>
				</div>
			</div>
		</div>
		</div>
	);
}

export default portfolio;
