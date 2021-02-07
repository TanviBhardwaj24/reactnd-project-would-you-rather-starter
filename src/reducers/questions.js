import {RECEIVE_QUESTIONS, USERS_ANSWER_TO_QUESTION, ADD_NEW_QUESTION} from "../actions/questions";

export default function questions(state={}, action){
    switch (action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case USERS_ANSWER_TO_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case ADD_NEW_QUESTION:
            return{
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    }
}