const initialState = {
    messages: [
        {text: "FirstMessage", author: 'test', id: 1, chatId: 1},
        {text: "FirstMessageHereToo!", author: 'test', id: 2, chatId: 2}
    ]
}
const CREATE = 'MESSAGE_CREATE';
const DELETE = 'MESSAGE_DELETE'

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {

        case DELETE:
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload)
            }
        case CREATE:
            return {
                ...state,
                messages: [...state.messages, {
                    text: action.payload.message,
                    author: action.payload.author,
                    id: Date.now(),
                    chatId: Number(action.payload.chatId)
                }]
            };

        default:
            return state
    }
};

export const addMessage = (payload) => ({type: CREATE, payload});
export const deleteMassage = (payload) =>({type: DELETE, payload})