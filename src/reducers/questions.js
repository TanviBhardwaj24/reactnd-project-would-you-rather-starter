import {RECEIVE_QUESTIONS, USERS_ANSWER_TO_QUESTION} from "../actions/questions";

export default function questions(state={}, action){
    switch (action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        // case USERS_ANSWER_TO_QUESTION:
        //     return {
        //         ...state,
        //         [action.question_id]: {
        //             ...state[action.question_id],
        //             [action.answer]: {
        //                 ...state[action.question_id][action.answer],
        //                 votes: state[action.question_id][action.answer].votes.concat([action.authedUser])
        //             }
        //         }
        //     }
        default:
            return state
    }
}