import React from 'react';

const introduction = () => {


	return(
		<div className="w-100 pv5" style={{backgroundColor: "#3262A6", color: "#f7f9fb"}}> 
			<div className="w-90 center tc">
				<div className="center">
					<h2 className='tc f3 lh-copy ttu fw5' style={{fontFamily: 'Helvetica, system sans-serif', letterSpacing: "0.03em"}}>Contact</h2>
					<p className="mv0" style={{fontFamily: 'Georgia, system serif', lineHeight: "1.5em"}}>
						I'm currently open for work, so if you like my portfolio, have a project you want off the ground,
						or want to chat, feel free to get in touch with me at this email address:
					</p>
					<h1 className="f5 lh-copy mt2 fw6" style={{fontFamily: 'Helvetica, system sans-serif'}}>PhilipLofters@gmail.com</h1>
				</div>
			</div>
		</div>
	);
}

export default introduction;