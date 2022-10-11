export  const GET_COMMENTS_REQUEST = 'COMMENTS:GET_COMMENTS_REQUEST';
export  const GET_COMMENTS_SUCCESS = 'COMMENTS:GET_COMMENTS_SUCCESS';
export  const GET_COMMENTS_FAILURE = 'COMMENTS:GET_COMMENTS_FAILURE';
export  const GET_COMMENTS_LOADING = 'COMMENTS:GET_COMMENTS_LOADING';


export const getCommentsRequest = () => ({
    type: GET_COMMENTS_REQUEST,
});
export const getCommentsSuccess = (data) => ({
    type: GET_COMMENTS_SUCCESS,
    payload: data,
});
export const getCommentsFailure = (err) => ({
    type: GET_COMMENTS_FAILURE,
    payload: err,
});
export const getCommentsLoading = (loading) => ({
    type: GET_COMMENTS_LOADING,
    payload: loading,
})