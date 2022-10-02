const initialState = {
    chats: [
        {
            id: 1,
            name: "Chat1",
        },
        {
            id: 2,
            name: "Chat2",
        }
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
            let id = 1;
            if (state.chats.length) {
                id = Number(state.chats[state.chats.length - 1].id + 1);
            }
            return {
                ...state,
                chats: [...state.chats, {id: id, name: "Chat" + id}]
            };
        default:
            return state
    }
}