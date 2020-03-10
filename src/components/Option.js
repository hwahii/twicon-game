import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './Option.css';

function mapDispatchToOptionProps(dispatch, ownProps) {
	return {
		onClick: () => {
			dispatch({
				type: 'TOGGLE_ANS',
				payload: {
					answerClass: ownProps.aClass,
					questionClass: ownProps.qClass
				}
			});

			if (ownProps.qClass === ownProps.aClass) {
				setTimeout(() => {
					dispatch({ type: 'ADD_SCORE' });
					dispatch({ type: 'EMPTY_OPTIONS' });
				}, 500);
			} else {
				setTimeout(() => {
					dispatch({ type: 'SET_GAME' });
					dispatch({ type: 'EMPTY_OPTIONS' });
				}, 2000);
			}
		}
	};
}

const Option = ({ correct, wrong, aClass, onClick }) => {
	let styleClass = classNames({
		neutral: true,
		correct: correct,
		wrong: wrong
	});
	if (correct || wrong) {
		return (
			<div className={styleClass}>
				<i className={aClass}></i>
			</div>
		);
	} else {
		return (
			<div
				onClick={e => {
					e.preventDefault();
					onClick();
				}}
				className={styleClass}
			>
				<i className={aClass}></i>
			</div>
		);
	}
};
export default connect(null, mapDispatchToOptionProps)(Option);
