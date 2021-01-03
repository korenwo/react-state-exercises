import React, { Component } from 'react';

/**
 * Make a clock component that updates every second!
 * It should look like in the attached image: src/Clock/clock.gif
 * Open the image to see the animation.
 */

class Clock extends Component {
	constructor(props) {
		super (props);
		this.state = {
			timeToDisplay: 'Loading..'
		}
	}

	startRun() {
		setInterval(() => {
			const date = new Date();
			const h = date.getHours();
			const m = date.getMinutes();
			const s = date.getSeconds();
			const timeToDisplay = `${h}:${m}:${s}`;
			this.setState({ timeToDisplay })

		}, 1000);
	}

	render() {
		this.startRun();
		return (
			<div>
				<h1>Clock</h1>
				The time is: {this.state.timeToDisplay}
			</div>
		);
	}
}

export default Clock;