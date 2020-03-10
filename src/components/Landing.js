import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Landing.css';
import landingImage from '../landing.png';

const Landing = ({ dispatch }) => {
	return (
		<div className="container">
			<img className="landing" src={landingImage} alt="taiwan" />
			<h1>Taiwan Icon Game</h1>
			<Link to="/game">
				<button
					onClick={() => {
						let questionArr = [];
						for (let i = 0; i < 100; i++) {
							questionArr.push(i);
						}
						questionArr.sort(() => {
							return 0.5 - Math.random();
						});
						dispatch({ type: 'RESET_SCORE' });
						dispatch({
							type: 'CREATE_QUESTIONS',
							payload: questionArr
						});
					}}
				>
					開始挑戰!
				</button>
			</Link>
		</div>
	);
};
export default connect()(Landing);
