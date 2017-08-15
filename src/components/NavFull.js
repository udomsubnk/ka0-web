import React, { Component } from 'react';
class NavFull extends Component{
	constructor(props){
		super(props);
		this.state = {
			isNavFullOpened : false
		}
		this.toggleNavFull = this.toggleNavFull.bind(this);
	}

	toggleNavFull(){
		this.setState((prevState)=>({
			isNavFullOpened : !prevState.isNavFullOpened
		}));
	}

	render(){
		return (
			<div id="NavFull" hidden={!this.state.isNavFullOpened}>
				<div className="close-button flex-all-center" onClick={this.toggleNavFull}>
					<i className="fa fa-times"></i>
				</div>
			</div>
		);
	}
}
export default NavFull;