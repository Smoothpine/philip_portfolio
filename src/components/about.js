import React from 'react';

const about = () => {
	return(
		<div className="w-100 pt5 pb2" style={{backgroundColor: "#f7f9fb", color: "#3262A6"}}> 
			<div className="w-90 center tc mb5" >
				<h2 className='tc f3 lh-copy ttu fw5' style={{fontFamily: 'Helvetica, system sans-serif'}}>About Me</h2>
				<p className="mv0" style={{fontFamily: 'Georgia, system serif', color: "#3262A6"}}>
					I've always had an interest in web development as someone who loves creation and design. 
					I am a developer with close to three years of experience of developing and deploying projects to production.
					Going through that time of practicing and learning has given me a flexible skillset. 
					One where I can dance between the bounderies of being a Front-End Developer and being a Back-End Developer. 
				</p>
			</div>
		</div>
	);
}

export default about;