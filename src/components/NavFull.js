import React, { Component } from 'react';
class NavFull extends Component{
	render(){
		return (
			<div id="NavFull" hidden={!this.props.isMenuClick} className="flex-all-center flex-direct-column hidden-md-up">
				<div className="profile flex-all-center flex-direct-column">
					<div className="avatar"></div>
					<div className="detail">
						<section className="uppercase white">udomsub naikorn [ kao ]</section>
						<section className="mgt-5px">Learner/Developer</section>
					</div>
					<div className="social">
						<a href="https://www.facebook.com/udomsub.nk" target="_blank">
							<img src="facebook.png" alt="facebook" height="30px"/>
						</a>
						<a href="https://www.linkedin.com/in/udomsubnk" target="_blank" style={{marginLeft:'10px',marginRight:'10px'}}>
							<img src="linkedin.png" alt="linkedin" height="30px"/>
						</a>
						<a href="https://github.com/udomsubnk" target="_blank">
							<img src="github.png" alt="github" height="30px"/>
						</a>
					</div>
				</div>
				<div className="menu flex-all-center flex-direct-column"></div>

			</div>
		);
	}
}
export default NavFull;