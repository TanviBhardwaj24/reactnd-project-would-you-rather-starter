export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const USERS_ANSWER_TO_QUESTION = 'USERS_ANSWER_TO_QUESTION';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function usersAnswerToQuestion({authedUser, qid, answer}) {
    return {
        type: USERS_ANSWER_TO_QUESTION,
        authedUser,
        qid,
        answer
    };
}

export function addNewQuestion(question){
    return{
        type: ADD_NEW_QUESTION,
        question
    }
}