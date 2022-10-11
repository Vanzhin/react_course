import {STATUSES} from "../middlewares/commentMiddleWare";
import {GET_COMMENTS_FAILURE, GET_COMMENTS_LOADING, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS} from "../actionTypes";

const initialState = {
    comments: [],
    request: STATUSES.IDLE,
    error: null,
    loading: false,
}
const ADD = 'ADD_COMMENTS';

export const commentsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD:
            return {
                ...state,
                comments: action.payload
            };
        case GET_COMMENTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
            };
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                request: STATUSES.SUCCESS,
                error: null,

            };
        case GET_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                request: STATUSES.FAILURE
            };
        case GET_COMMENTS_LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state
    }
};

export const addComments = (payload) => ({type: ADD, payload});
