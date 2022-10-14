import * as types from "./actionTypes";

export const getCommentsRequest = () => ({
    type: types.GET_COMMENTS_REQUEST,
});
export const getCommentsSuccess = (data) => ({
    type: types.GET_COMMENTS_SUCCESS,
    payload: data,
});
export const getCommentsFailure = (err) => ({
    type: types.GET_COMMENTS_FAILURE,
    payload: err,
});
export const getCommentsLoading = (loading) => ({
    type: types.GET_COMMENTS_LOADING,
    payload: loading,
});
export const registerLoading = () => ({
    type: types.REGISTER_LOADING,
});
export const registerFailure = (error) => ({
    type: types.REGISTER_FAILURE,
    payload: error.toString()
});
export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
});

export const loginLoading = () => ({
    type: types.LOGIN_LOADING,
});
export const loginFailure = (error) => ({
    type: types.LOGIN_FAILURE,
    payload: error.toString()
});
export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
});
export const logoutLoading = () => ({
    type: types.LOGOUT_LOADING,
});
export const logoutFailure = (error) => ({
    type: types.LOGOUT_FAILURE,
    payload: error.toString()
});
export const logoutSuccess = () => ({
    type: types.LOGIN_SUCCESS,
    payload: null
})