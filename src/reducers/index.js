import { combineReducers } from 'redux';
import scoreReducer from './scoreReducer';
import questionReducer from './questionReducer';
import optionReducer from './optionReducer';

export default combineReducers({
	score: scoreReducer,
    question: questionReducer,
    option: optionReducer
});
