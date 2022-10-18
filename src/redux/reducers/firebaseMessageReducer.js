import {
    FIREBASE_MESSAGE_ADD_FAILURE,
    FIREBASE_MESSAGE_ADD_LOADING,
    FIREBASE_MESSAGE_ADD_SUCCESS, GET_FIREBASE_MESSAGES_FAILURE,
    GET_FIREBASE_MESSAGES_LOADING, GET_FIREBASE_MESSAGES_SUCCESS
} from "../actionTypes";
import {messageAddFailure, messageAddLoading, messageAddSuccess} from "../actions";
import firebase from "firebase/compat/app";

const initialState = {
    loading: false,
    error: null,
    message: ''
}

export const firebaseMessageReducer = (state = initialState, action) => {

    switch (action.type) {

        case FIREBASE_MESSAGE_ADD_LOADING:
        case GET_FIREBASE_MESSAGES_LOADING:

            return {
                ...state,
                loading: action.payload
            };
        case FIREBASE_MESSAGE_ADD_SUCCESS:
            return {
                ...state,
                message: action.payload,
            };
        case FIREBASE_MESSAGE_ADD_FAILURE:
        case GET_FIREBASE_MESSAGES_FAILURE:

            return {
                ...state,
                error: action.payload,

            };
        case GET_FIREBASE_MESSAGES_SUCCESS:

            return {
                ...state,
                error: null,

            };
        default:
            return state
    }
};

export const addMessageInitiate = (message, chatId, uid, displayName) => async (dispatch) => {
    dispatch(messageAddLoading());
    try {
        await firebase.database().ref("messages").child(chatId).child(uid).child(displayName).push(message);
        dispatch(messageAddSuccess(message))
    } catch (error) {
        dispatch(messageAddFailure(error.toString()));
    } finally {
        dispatch(messageAddLoading(false));
    }
};
