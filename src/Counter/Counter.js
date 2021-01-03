import React, { Component } from 'react';

/**
 * Here is a working counter. Add more features to it:
 * 1. User can't have go below 0
 * 2. User can't go above 20
 * 3. Add another button "increase 10" which will increase the counter by 10 (if it's above limit, then set to the limit)
 */

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		};
	}

	increase() {
		this.setState({
			num: Math.min(this.state.num + 1, 20)
		});
	}

	decrease() {
		this.setState({
			num: Math.max(this.state.num - 1, 0)
		});
	}

	render() {
		return (
			<div>
				<h1>Counter: </h1>
				<button onClick={this.increase.bind(this)}>Increase</button>
				<button onClick={this.decrease.bind(this)}>Decrease</button>
				<span>{this.state.num}</span>
			</div>
		);
	}
}

export default Counter;























