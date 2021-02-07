export const RECEIVE_USERS='RECEIVE_USERS';
export const SAVE_USER_ANSWER='SAVE_USER_ANSWER';
export const ADD_USERS_NEW_QUESTION='ADD_USERS_NEW_QUESTION';

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users
    }
}

export function saveUsersAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_USER_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function saveNewQuestionByUser({id, author}){
    return{
        type: ADD_USERS_NEW_QUESTION,
        id,
        author
    }
}