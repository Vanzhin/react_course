const initialState = {
    messages: [
        {text: "FirstMessage", author: 'test', id: 1, chatId: 1},
        {text: "FirstMessageHereToo!", author: 'test', id: 2, chatId: 2}
    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'messageDelete':
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.id)
            }
        case 'messageCreate':
            return {
                ...state,
                messages: [...state.messages, {
                    text: action.message,
                    author: action.author,
                    id: Date.now(),
                    chatId: action.chatId
                }]
            };

        default:
            return state
    }
}