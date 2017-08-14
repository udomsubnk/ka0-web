import React, { Component } from 'react';
class NavbarTop extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isMenuClick : false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu(){
		this.setState((prevState)=>({
			isMenuClick : !prevState.isMenuClick
		}));
	}

	render(){
		return(
			<div id="NavbarTop" className="hidden-md-up flex-all-center">
				<div className="logo-block flex-all-center" onClick={this.toggleMenu}>
					<div className="logo">I&apos;m Ka0</div>
					<i className={this.state.isMenuClick?'hide':'fa fa-caret-down'}></i>
				</div>
				<div className={this.state.isMenuClick?'close-button':'hide'} onClick={this.toggleMenu}>
					<i className="fa fa-times"></i>
				</div>
			</div>
		);
	}
}
export default NavbarTop;