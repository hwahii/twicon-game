export default function(state = [], action) {
	switch (action.type) {
		case 'CREATE_OPTIONS':
			return action.payload;
		case 'TOGGLE_ANS':
            let newState = [...state];
            const {answerClass, questionClass} = action.payload;
            if (answerClass === questionClass) {
                newState.forEach(s => {
                    if (s.class === answerClass) {
                        s.correct = true;
                    }
                    return s;
                })
            } else {
                newState.forEach(s => {
                    if (s.class === answerClass) {
                        s.wrong = true;
                    } else if (s.class === questionClass) {
                        s.correct = true;
                    }
                    return s;
                })
            }
            return newState;
        case 'EMPTY_OPTIONS':
            return [];
		default:
			return state;
	}
}
