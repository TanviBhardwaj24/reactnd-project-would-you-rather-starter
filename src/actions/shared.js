import {getInitialData} from "../utils/api";
import {receiveUsers, saveUsersAnswer} from "./users";
import {receiveQuestions, usersAnswerToQuestion} from "./questions";
import {_saveQuestionAnswer} from "../utils/_DATA";

// const AUTHED_ID='sarahedo'

export function handleInitialData(){
    return(dispatch) =>{
        return getInitialData().then(({users,questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            // dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}

export function handleSaveQuestionAnswer(authedUser,qid, answer) {
    return (dispatch) => {
        const data = {
            // authedUser,
            // qid: question_id,
            // answer,
            authedUser,
            qid,
            answer,
        }


        return _saveQuestionAnswer(data)
            .then(() => {
                dispatch(usersAnswerToQuestion(data))
                dispatch(saveUsersAnswer(data))
            })
            .catch((error) => {
                console.warn('Error', error);
            })
    }
}