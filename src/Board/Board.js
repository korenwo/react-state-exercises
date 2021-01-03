import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {
	constructor(props) {
		super (props);
		this.state= {
			'selectedBoard': '',
		};
	}
	
	handleClick = (e) => {
		this.setState({
			selectedBoard: e.target.id,
		})
	}

	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div id="board1" className={`Board-option ${this.state.selectedBoard === 'board1' ? 'board-selected' : ''}`} onClick={this.handleClick}>1</div>
					<div id="board2" className={`Board-option ${this.state.selectedBoard === 'board2' ? 'board-selected' : ''}`} onClick={this.handleClick}>2</div>
					<div id="board3" className={`Board-option ${this.state.selectedBoard === 'board3' ? 'board-selected' : ''}`} onClick={this.handleClick}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;