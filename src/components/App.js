import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Game from './Game';
import './App.css';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div style={{ textAlign: 'center' }}>
					<Route exact path="/" component={Landing} />
					<Route path="/game" component={Game} />
				</div>
			</BrowserRouter>
		</div>
	);
};
export default App;
