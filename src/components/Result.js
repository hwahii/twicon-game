import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Result.css';

function select(state) {
	return { score: state.score };
}
class Result extends Component {
	render() {
		const { score } = this.props;
		let resultIconClass = '';
		let resultIconName = '';
		let resultText = '';

		if (score < 50) {
			resultIconClass = 'twicon-green-man';
			resultIconName = '小綠人';
			resultText = '再加油喔！一起認識台灣！';
		} else if (score < 70) {
			resultIconClass = 'twicon-taipei101';
			resultIconName = '台北101';
			resultText = '好厲害喔！台灣有你真好！';
		} else if (score < 100) {
			resultIconClass = 'twicon-black-bear';
			resultIconName = '台灣黑熊';
			resultText = '高手！台灣通就是你！';
		} else {
			resultIconClass = 'twicon-main-island';
			resultIconName = '台灣島';
			resultText = 'Ｊ丟係愛歹丸啦！';
		}
		return (
			<div className="container">
				<div className="card">
					<div className="score">得分: {score} / 100</div>
					<div className="result-txt">獲得徽章</div>
					<div className="badge">
						<i className={resultIconClass}></i>
					</div>
					<div className="badge-name">{resultIconName}</div>
					<div className="result-txt">{resultText}</div>
				</div>
				<Link to="/">
					<button>回主畫面</button>
				</Link>
			</div>
		);
	}
}

export default connect(select)(Result);
