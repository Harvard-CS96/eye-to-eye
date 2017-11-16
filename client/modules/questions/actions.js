import * as types from './types';

const loadQuestions = (questions) => ({
    type: types.LOAD_QUESTIONS,
    data: {
        questions
    }
})

const setAnswer = (questionId, answer) => ({
    type: types.SET_ANSWER,
    data: {
        questionId,
        answer
    }
})

export {
    loadQuestions,
    setAnswer 
}