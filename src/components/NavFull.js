import React, { Component } from 'react';
class NavFull extends Component{
	render(){
		return (
			<div id="NavFull" hidden={!this.props.isMenuClick}>
				
			</div>
		);
	}
}
export default NavFull;