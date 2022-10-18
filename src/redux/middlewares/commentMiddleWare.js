import {
    getCommentsFailure,
    getCommentsLoading,
    getCommentsRequest,
    getCommentsSuccess
} from "../actions";

export const getAllComments = () => async (dispatch) => {
    dispatch(getCommentsRequest());
    dispatch(getCommentsLoading(true))
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!response) {
            throw new Error(`Request failed with status ${response.status}`)
        }
        const comments = await response.json();
        dispatch(getCommentsSuccess(comments))
        // dispatch(addComments(comments));
    } catch (error) {
        dispatch(getCommentsFailure(error.message))
    } finally {
        dispatch(getCommentsLoading(false))
    }

}

export const STATUSES = {
    IDLE: 'приостановлено',
    REQUEST: 'выполняется запрос',
    SUCCESS: 'запрос выполнен',
    FAILURE: 'ошибка выполнения запроса',
}

export const selectComments = (state) => state.comments.comments;
export const selectCommentsError = (state) => state.comments.error;
export const selectCommentsLoading = (state) => state.comments.loading;
export const selectCommentsStatus = (state) => state.comments.request;


