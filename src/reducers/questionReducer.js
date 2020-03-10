export default function(state = [], action) {
	switch (action.type) {
		case 'CREATE_QUESTIONS':
            return action.payload;
        case 'SET_GAME':
            return [];
		default:
			return state;
	}
}
