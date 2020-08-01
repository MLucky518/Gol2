import React from 'react';
import "./index.scss";
import Grid from "./components/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Title from './components/Title';
import Buttons from './components/Buttons';
import ImageAvatars from "./Presets/Presets.js"
import { gliderArray, spaceships, oscillators, gliderGun } from "./Presets/presets_templates"

const presets = [
	gliderArray,
	spaceships,
	oscillators,
	gliderGun
]


class App extends React.Component {
	constructor() {
		super();

		this.speed = 100;
		this.rows = 30;
		this.cols = 50;
		this.state = {
			lifecycles: 0,
			// creates a 2D array--- an array of rows and then each row is mapped and and array of cols is added to that row
			// could be done with nested for loops as well

			grid: Array(this.rows).fill().map(() => Array(this.cols).fill(0))
		}
	}


	buttons = {
		run: this.playButton,
		pause: this.pause
	}

	selectCell = (row, col) => {
		let gridClone = cloneGrid(this.state.grid);
		if (gridClone[row][col] === 0) {
			gridClone[row][col] = 1;
		} else {
			gridClone[row][col] = 0
		}
		this.setState({
			grid: gridClone
		});
	}


	pause = () => {
		clearInterval(this.intervalId)
	}


	seed = () => {
		let gridClone = cloneGrid(this.state.grid);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridClone[i][j] = 1;
				}
			}
		}
		this.setState({
			grid: gridClone
		});

		console.log(this.state.grid)
	}


	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed)
	}

	clearGrid = () => {
		let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
		this.setState({
			grid: grid,
			generation: 0
		});
	}

	faster = () => {
		this.speed = 150;
		this.playButton();
	}

	slower = () => {
		this.speed = 50;
		this.playButton();
	}


	choosePreset = (selection) => {
		this.clearGrid()
		let gridClone = cloneGrid(presets[selection]);

		this.setState({
			grid: gridClone
		})
	}

	play = () => {
		let g = this.state.grid;
		let g2 = cloneGrid(this.state.grid);

		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				let count = 0;
				if (i > 0) if (g[i - 1][j] === 1) count++;
				if (i > 0 && j > 0) if (g[i - 1][j - 1] === 1) count++;
				if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1] === 1) count++;
				if (j < this.cols - 1) if (g[i][j + 1] === 1) count++;
				if (j > 0) if (g[i][j - 1]) count++;
				if (i < this.rows - 1) if (g[i + 1][j] === 1) count++;
				if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1] === 1) count++;
				if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1] === 1) count++;
				if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = 0;
				if (!g[i][j] && count === 3) g2[i][j] = 1;

			}
		}
		this.setState({
			lifecycles: this.state.lifecycles + 1,
			grid: g2,

		});
		console.log(this.state.grid)
	};


	componentDidMount() {

		this.seed();
	}

	render() {

		return (

			<div className="App">
				<Switch>
					<Route path="/" exact><Title /></Route>
					<div className="main-content">

						<Route path="/game" exact>
							<div className="grid-content">
								<h2>LifeCycles: {this.state.lifecycles}</h2>
								<Grid cols={this.cols} rows={this.rows} grid={this.state.grid} selectCell={this.selectCell} />

								<Buttons
									playButton={this.playButton}
									pauseButton={this.pause}
									clear={this.clearGrid}
									faster={this.faster}
									slower={this.slower}


								/>
							</div>
							<div className="presets">
								<h1>Presets</h1>
								<ImageAvatars
									preset={this.choosePreset}
									seed={this.seed} />
							</div>
						</Route>

					</div>
				</Switch>


			</div>



		);
	}
}

//HELPER FUNCTION

// cannot do a deep clone of a nested array by splicing so need to stringify and parse
function cloneGrid(arr) {
	return JSON.parse(JSON.stringify(arr));
}

export default App;
