import {getInitialData} from "../utils/api";
import {receiveUsers, saveUsersAnswer,saveNewQuestionByUser} from "./users";
import {receiveQuestions, usersAnswerToQuestion,addNewQuestion} from "./questions";
import {_saveQuestionAnswer,_saveQuestion} from "../utils/_DATA";

// const AUTHED_ID='sarahedo'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            // dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
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

export function handleSaveNewQuestion(authedUser, newQuestionOptionOne, newQuestionOptionTwo) {
    console.log('newQuestionOptionOne',newQuestionOptionOne)
    console.log('newQuestionOptionTwo',newQuestionOptionTwo)
    console.log('authedUser',authedUser)
    return (dispatch) => {
        const data = {
            authedUser,
            newQuestionOptionOne,
            newQuestionOptionTwo,
        }
        return _saveQuestion(data).then((question)=>{
            dispatch(addNewQuestion(question))
            dispatch(saveNewQuestionByUser(question))
        }).catch((error)=>{
            console.warn('ERROR!! Could not add a new question:(',error)
        })
    }
}