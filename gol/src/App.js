import React from 'react';
import "./index.scss";
import Grid from "./components/Grid";
import { BrowserRouter as Switch, Route } from "react-router-dom";
// import Home from "./components/Home"
import Title from './components/Title';
import Buttons from './components/Buttons';
import ImageAvatars from "./Presets/Presets.js"
import { gliderArray, spaceships, oscillators, gliderGun, smile } from "./Presets/presets_templates"
import Instructions from './components/Instructions';

const presets = [
	gliderArray,
	spaceships,
	oscillators,
	gliderGun,
	smile
]


class App extends React.Component {
	constructor() {
		super();
		this.final1 = 0;
		this.final2 = 0;
		this.cycles = 100;
		this.speed = 100;
		this.rows = 30;
		this.cols = 50;
		this.rows2 = 15;
		this.cols2 = 15;
		this.state = {
			lifecycles: 0,
			lifecycles2: 0,

			// creates a 2D array--- an array of rows and then each row is mapped and and array of cols is added to that row
			// could be done with nested for loops as well

			grid: Array(this.rows).fill().map(() => Array(this.cols).fill(0)),
			grid2: Array(this.rows).fill().map(() => Array(this.cols).fill(0)),


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
			grid: gridClone,


		});
	}



	pause = () => {
		clearInterval(this.intervalId)
	}

	pause2 = () => {
		clearInterval(this.intervalId2)
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


	}

	seed2 = () => {
		let gridClone2 = cloneGrid(this.state.grid2);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridClone2[i][j] = 1;
				}
			}
		}
		this.setState({
			grid2: gridClone2

		});


	}



	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed)
	}


	playButton2 = () => {
		clearInterval(this.intervalId2);
		this.intervalId2 = setInterval(this.play2, this.speed)
	}

	clearGrid = () => {
		let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
		this.setState({
			grid: grid,
			lifecycles: 0
		});
	}



	faster = () => {
		this.speed = 5;
		this.playButton();
	}

	slower = () => {
		this.speed = 250;
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
				if (i > 0 && g[i - 1][j] === 1) {
					count++;
				}
				if (i > 0 && j > 0) {
					if (g[i - 1][j - 1] === 1) {
						count++;
					}
				}
				if (i > 0 && j < this.cols - 1) {
					if (g[i - 1][j + 1] === 1) {
						count++;
					}
				}
				if (j < this.cols - 1 && g[i][j + 1] === 1) {
					count++;
				}
				if (j > 0 && g[i][j - 1]) {
					count++;
				}
				if (i < this.rows - 1 && g[i + 1][j] === 1) {
					count++;
				}
				if (i < this.rows - 1 && j > 0) {
					if (g[i + 1][j - 1] === 1) {
						count++;
					}
				}
				if (i < this.rows - 1 && this.cols - 1) {
					if (g[i + 1][j + 1] === 1) {
						count++;
					}
				}
				if (g[i][j] && (count < 2 || count > 3)) {
					g2[i][j] = 0;
				}
				if (!g[i][j] && count === 3) {
					g2[i][j] = 1;
				}

			}
		}
		this.setState({
			lifecycles: this.state.lifecycles + 1,
			grid: g2,



		});

	};

	checkWinner = () => {
		clearInterval(this.intervalId2);
		for (let i = 0; i < this.rows2; i++) {
			for (let j = 0; j < this.cols2; j++) {
				if (this.state.grid[i][j] === 1) {
					this.final1++;
				}
				if (this.state.grid2[i][j] === 1) {
					this.final2++
				}
			}
		}

		if (this.final1 === this.final2) {
			console.log("tie")
		}
		else if (this.final1 > this.final2) {
			console.log("p1")
		} else {
			console.log("cpu")
		}
	}

	play2 = () => {
		let g = this.state.grid2;
		let g2 = cloneGrid(this.state.grid2);

		if (this.state.lifecycles2 < 100) {
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.cols; j++) {
					let count = 0;
					if (i > 0 && g[i - 1][j] === 1) {
						count++;
					}
					if (i > 0 && j > 0) {
						if (g[i - 1][j - 1] === 1) {
							count++;
						}
					}
					if (i > 0 && j < this.cols - 1) {
						if (g[i - 1][j + 1] === 1) {
							count++;
						}
					}
					if (j < this.cols - 1 && g[i][j + 1] === 1) {
						count++;
					}
					if (j > 0 && g[i][j - 1]) {
						count++;
					}
					if (i < this.rows - 1 && g[i + 1][j] === 1) {
						count++;
					}
					if (i < this.rows - 1 && j > 0) {
						if (g[i + 1][j - 1] === 1) {
							count++;
						}
					}
					if (i < this.rows - 1 && this.cols - 1) {
						if (g[i + 1][j + 1] === 1) {
							count++;
						}
					}
					if (g[i][j] && (count < 2 || count > 3)) {
						g2[i][j] = 0;
					}
					if (!g[i][j] && count === 3) {
						g2[i][j] = 1;
					}

				}

			}



			this.setState({
				lifecycles2: this.state.lifecycles2 + 1,

				grid2: g2



			});
		}



	};



	componentDidMount() {


		this.seed2();
	}

	render() {

		return (

			<div className="App">
				<Switch>
					<Route exact path="/" ><Title /></Route>
					<div className="main-content">

						<Route exact path="/game" >
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

						<Route exact path="/game2">
							<div className="grid-content2">
								<div>
									<h2>LifeCycles: {this.state.lifecycles}</h2>
									<h3>Player</h3>
									<Grid cols={this.cols2} rows={this.rows2} grid={this.state.grid} selectCell={this.selectCell} />

									<Buttons
										playButton={this.playButton}
										pauseButton={this.pause}
										clear={this.clearGrid}
										faster={this.faster}
										slower={this.slower}


									/>
								</div>
								<button onClick={() => this.checkWinner()}>Calculate</button>
								<div>
									<div className="grid-content">
										<h2>LifeCycles: {this.state.lifecycles2}</h2>
										<h3>CPU</h3>
										<Grid cols={this.cols2} rows={this.rows2} grid={this.state.grid2} selectCell={this.selectCell} />

										<Buttons
											playButton={this.playButton2}
											pauseButton={this.pause2}
											clear={this.clearGrid}
											faster={this.faster}
											slower={this.slower}


										/>
									</div>
								</div>
							</div>
						</Route>
						<Route exact path="/instructions"><Instructions /></Route>

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
