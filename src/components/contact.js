import React from 'react';

const introduction = () => {


	return(
		<div className="w-100 pv5" style={{backgroundColor: "#31708e", color: "#f7f9fb"}}> 
			<div className="w-90 center tc">
				<div className="center">
					<p className="mb0" style={{fontFamily: 'Georgia, system serif'}}>
						Thank you for visiting my site. I'm currently open for work, so if you like my portfolio, have a project you want off the ground,
						or want to talk, feel free to get in touch with me.
					</p>
					<p className="mb0 mt2" style={{fontFamily: 'Georgia, system serif'}}>Send me an email at: </p>
					<h1 className="f5 lh-copy mt2 fw5" style={{fontFamily: 'Helvetica, system sans-serif'}}>PhilipLofters@gmail.com</h1>
				</div>
			</div>
		</div>
	);
}

export default introduction;