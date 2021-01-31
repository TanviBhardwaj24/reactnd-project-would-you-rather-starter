export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS';
export const USERS_ANSWER_TO_QUESTION = 'USERS_ANSWER_TO_QUESTION';

export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function usersAnswerToQuestion({authedUser, question_id, answer}) {
    return {
        type: USERS_ANSWER_TO_QUESTION,
        authedUser,
        question_id,
        answer
    };
}