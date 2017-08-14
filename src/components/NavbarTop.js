import React, { Component } from 'react';
class NavbarTop extends Component{
	constructor(props) {
		super(props);
		this.state = {
			menuClick : false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	toggleMenu(){
		this.setState((prevState)=>({
			menuClick : !prevState.menuClick
		}));
	}
	render(){
		return(
			<div id="NavbarTop">
				<div className="logo-block" onClick={this.toggleMenu}>
					<div className="logo">I&apos;m Ka0</div>
					<i className={this.state.menuClick?"fa fa-caret-up":'fa fa-caret-down'}></i>
				</div>
			</div>
		);
	}
}
export default NavbarTop;