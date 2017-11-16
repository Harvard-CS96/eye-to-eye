import * as types from './types';

const initialState = {
    questions: []
}

const reducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case types.LOAD_QUESTIONS: {
            let { questions } = data;
            console.log("reducer got questions: ", questions)
            if (!Array.isArray(questions)) {
                questions = [questions]
            }
            questions = questions
                .filter(q => (
                    q._id &&
                    q.text &&
                    q.answer_type &&
                    q.topic &&
                    q.is_active === true &&
                    Array.isArray(q.answer_options) &&
                    q.answer_options.length > 0
                ))    
                .map(q => ({
                    ...q,
                    answer: ""
                }))
            return {
                ...state,
                questions: questions
            }
        }
        case types.SET_ANSWER: {
            let { questionId, answer } = data;
            if (answer === "") {
                answer = null;
            }
            const newAnswers = [ ...state.questions ];
            const { length } = newAnswers
            for (let i = 0; i < length; i++) {
                if (newAnswers[i]._id === questionId) {
                    newAnswers[i].answer = answer;
                    break;
                } 
            }
            return {
                ...state,
                questions: newAnswers
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;