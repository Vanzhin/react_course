import {
    FIREBASE_MESSAGE_ADD_FAILURE,
    FIREBASE_MESSAGE_ADD_LOADING,
    FIREBASE_MESSAGE_ADD_SUCCESS,
    FIREBASE_MESSAGE_DELETE_FAILURE,
    FIREBASE_MESSAGE_DELETE_LOADING,
    GET_FIREBASE_MESSAGES_FAILURE,
    GET_FIREBASE_MESSAGES_LOADING,
    GET_FIREBASE_MESSAGES_SUCCESS
} from "../actionTypes";
import {
    messageAddFailure,
    messageAddLoading,
    messageAddSuccess,
    messageDeleteFailure,
    messageDeleteLoading
} from "../actions";
import firebase from "firebase/compat/app";
import {db} from "../../services/firebase";

const initialState = {
    loading: false,
    error: null,
    message: ''
}

export const firebaseMessageReducer = (state = initialState, action) => {

    switch (action.type) {

        case FIREBASE_MESSAGE_ADD_LOADING:
        case GET_FIREBASE_MESSAGES_LOADING:
        case FIREBASE_MESSAGE_DELETE_LOADING:
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
        case FIREBASE_MESSAGE_DELETE_FAILURE:
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

export const addMessageInitiate = (message, chatId, uid, displayName, mesId) => async (dispatch) => {
    dispatch(messageAddLoading());
    try {
        await firebase.database().ref("messages").child(chatId).child(mesId).set({text: message, author: displayName, uid: uid, id:mesId});
        dispatch(messageAddSuccess(message))
    } catch (error) {
        dispatch(messageAddFailure(error.toString()));
    } finally {
        dispatch(messageAddLoading(false));
    }
};

export const deleteMessageWithFirebase = (id, chatId) => async (dispatch) => {
    dispatch(messageDeleteLoading());
    try {
        await db.ref("messages").child(chatId).child(id).remove();
        // await db.ref("messages").child(chatId).child(uid).child(displayName).push(message);


    } catch (error){
        dispatch(messageDeleteFailure(error.toString()));

    } finally {
        dispatch(messageDeleteLoading(false));
    }
};
