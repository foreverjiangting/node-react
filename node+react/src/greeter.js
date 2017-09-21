
import React, {Component} from 'react';
class Greeter extends Component{
	constructor(props) {
    	super(props);
	    this.state = {
		    names: ['（1）免费行李','2','3'],
		    values: ['1','2','3'],
		    selectName: '',
		    prices: '0'
		};
	}
	render() {
		let textContent = {greetText: "jt测试测试测试"};
	    return (
	        <span>
	           {textContent.greetText}
	        </span>
	    );
	}
}
export default Greeter;

