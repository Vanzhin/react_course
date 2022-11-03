import {STATUSES} from "../middlewares/commentMiddleWare";
import {commentsReducer} from "./commentsReducer";
import {getCommentsFailure, getCommentsLoading, getCommentsRequest, getCommentsSuccess} from "../actions";

describe('commentReducer tests', () => {
    test('returns state with status request after CommentsRequest ', () => {
        const expected = {
            comments: [],
            request: STATUSES.REQUEST,
            error: null,
            loading: false,
        };
        const received = commentsReducer(undefined, getCommentsRequest());
        expect(received).toEqual(expected);
    });
    test('returns state with status loading after getCommentsLoading ', () => {

        const initialState = {
            comments: [],
            request: STATUSES.REQUEST,
            error: null,
            loading: false,
        };
        const expected = {
            comments: [],
            request: STATUSES.REQUEST,
            error: null,
            loading: true,
        };
        const received = commentsReducer(initialState, getCommentsLoading(true));
        expect(received).toEqual(expected);
    });
    test('returns state with status success after getCommentsSuccess ', () => {

        const comments = [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
            {
                "postId": 1,
                "id": 3,
                "name": "odio adipisci rerum aut animi",
                "email": "Nikita@garfield.biz",
                "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            }];

        const initialState = {
            comments: [],
            request: STATUSES.REQUEST,
            error: null,
            loading: false,
        };
        const expected = {
            comments: comments,
            request: STATUSES.SUCCESS,
            error: null,
            loading: false,
        };
        const received = commentsReducer(initialState, getCommentsSuccess(comments));
        expect(received).toEqual(expected);
    });
    test('returns state with status error after getCommentsFailure ', () => {

        const errorType = "error";
        const initialState = {
            comments: [],
            request: STATUSES.REQUEST,
            error: null,
            loading: false,
        };
        const expected = {
            comments: [],
            request: STATUSES.FAILURE,
            error: errorType,
            loading: false,
        };
        const received = commentsReducer(initialState, getCommentsFailure(errorType));
        expect(received).toEqual(expected);
    });
});
