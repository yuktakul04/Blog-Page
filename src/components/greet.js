import React from 'react';

class Greet extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: "HELLO WORLD!"};
	}
	
	
	changeValue = () => {
		this.setState(
			{val: "Famous cities of INDIA"}
			);
		}
	
	render(){
		return(
			<div>
				<h1>{this.state.val} </h1>
				<button type="button" onClick={this.changeValue}>START</button>
			</div>
		);
	}
}


export default Greet;