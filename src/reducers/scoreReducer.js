export default function(state = 0, action) {
	switch (action.type) {
		case 'RESET_SCORE':
			return 0;
		case 'ADD_SCORE':
			return state + 1;
		default:
			return state;
	}
}
