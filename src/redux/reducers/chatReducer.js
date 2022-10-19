const initialState = {
    chats: [
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'chatDelete':
            return {
                ...state,
                chats: state.chats.filter(chat => chat.id !== action.payload)
            };
        case 'chatCreate':
            let id = Number(action.payload.id);
            return {
                ...state,
                chats: [...state.chats, {id: id, name: "Chat" + id}]
            };
        case 'chatToInitialState':
            return {
                ...state,
                chats: initialState.chats
            };
        default:
            return state
    }
}