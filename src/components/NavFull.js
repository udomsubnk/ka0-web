import React, { Component } from 'react';
class NavFull extends Component{
	render(){
		return (
			<div id="NavFull" hidden={!this.props.isMenuClick}>
				<div className="close-button flex-all-center" onClick={this.props.toggleMenu}>
					<i className="fa fa-times"></i>
				</div>
			</div>
		);
	}
}
export default NavFull;