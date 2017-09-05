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
				</div>
				<div className="menu"></div>

			</div>
		);
	}
}
export default NavFull;