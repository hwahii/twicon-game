import React, { Component } from 'react';
import { connect } from 'react-redux';
import icons from '../icons';
import Option from './Option';
import Result from './Result';
import './Game.css';
import '../twicon.css';

function mapStateToOptionProps(state) {
	return {
		score: state.score,
		questions: state.question,
		options: state.option
	};
}

function mapDispatchToOptionProps(dispatch, ownProps) {
	return {
		onOptionChange: options => {
			dispatch({ type: 'CREATE_OPTIONS', payload: options });
		}
	};
}

class Game extends Component {
	genOptions(questionNum) {
		let { options } = this.props;
		if (options.length === 0) {
			let optionNums = [questionNum];
			for (let i = 0; i < 3; i++) {
				let randomNum = questionNum;
				while (optionNums.indexOf(randomNum) !== -1) {
					randomNum = Math.floor(
						Math.random() * Math.floor(icons.length)
					);
				}
				optionNums.push(randomNum);
			}
			optionNums.sort(() => {
				return 0.5 - Math.random();
			});
			for (let i = 0; i < 4; i++) {
				let icon = Object.assign({}, icons[optionNums[i]]);
				options.push(icon);
			}
			this.props.onOptionChange(options);
		}
		return options;
	}

	render() {
		const { score } = this.props;
		const { questions } = this.props;
		if (questions.length === 0 || questions.length === score) {
			return <Result />;
		} else {
			const icon = icons[questions[score]];
			const options = this.genOptions(questions[score]);
			return (
				<div className="container">
					<div className="score">得分: {score}</div>
					<div>請選出</div>
					<div className="question">{icon.name.tw}</div>
					<ul>
						{options.map(option => (
							<li key={option.class}>
								<Option
									correct={option.correct}
									wrong={option.wrong}
									aClass={option.class}
									qClass={icon.class}
								/>
							</li>
						))}
					</ul>
				</div>
			);
		}
	}
}
export default connect(mapStateToOptionProps, mapDispatchToOptionProps)(Game);
