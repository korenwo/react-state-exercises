import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			restaurant: '',
			meal: '',
			desert: false
		};
	}

	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState({[nam]: val});
	}
	
	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input type="text" name="username" onChange={this.myChangeHandler} />
				</div>
				<div>
					Choose restaurant:
					<select name="restaurant" onChange={this.myChangeHandler}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text" name="meal" onChange={this.myChangeHandler} />
				</div>
				<div>
					Want a desert?
					<input type="checkbox" name="desert" onChange={this.myChangeHandler} checked={this.state.desert} />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.username}! <br />
					We are glad you want to reserve a table at {this.state.restaurant}.<br />
					We will make sure that your favorite meal, {this.state.meal} is available.<br />
					{this.state.desert ? 'Additionally, our chef will make a special desert for you!' : ''}
				</div>
			</div>
		);
	}
}

export default FoodPicker;