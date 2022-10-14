import {
    LOGIN_FAILURE,
    LOGIN_LOADING,
    LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_LOADING, LOGOUT_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_LOADING,
    REGISTER_SUCCESS
} from "../actionTypes";
import {
    loginFailure,
    loginLoading, loginSuccess, logoutFailure, logoutLoading, logoutSuccess, registerFailure,
    registerLoading, registerSuccess
} from "../actions";
import {auth} from "../../services/firebase";

const initialState = {
    loading: false,
    error: null,
    user: null,
}

export const authsReducer = (state = initialState, action) => {

    switch (action.type) {

        case REGISTER_LOADING:
        case LOGIN_LOADING:
        case LOGOUT_LOADING:

            return {
                ...state,
                loading: true
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT_SUCCESS:
            console.log(state.user)
            return {
                ...state,
                user: null,
            }
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case LOGOUT_FAILURE:


            return {
                ...state,
                error: action.payload,

            };

        default:
            return state
    }
};

export const registerInitiate = (name, email, password) => async (dispatch) => {
    dispatch(registerLoading());
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        await auth.currentUser.updateProfile({displayName: name});
        dispatch(registerSuccess(auth.currentUser))
    } catch (error) {
        dispatch(registerFailure(error.toString()));
    } finally {
        dispatch(registerLoading());
    }
};

export const loginInitiate = (email, password) => async (dispatch) => {
    dispatch(loginLoading());
    try {
        await auth.signInWithEmailAndPassword(email, password);
        const user = auth.currentUser;

        dispatch(loginSuccess(user))
    } catch (error) {
        dispatch(loginFailure(error.toString()));
    } finally {
        dispatch(loginLoading());
    }
};

export const logoutInitiate = () => async (dispatch) => {
    dispatch(logoutLoading());
    try {
        await auth.signOut();

        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFailure(error.toString()));
    } finally {
        dispatch(logoutLoading());
    }
}

