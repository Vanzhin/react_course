export const addMessageWithThunk = (chatId, message, author) => (dispatch, getState) => {
    dispatch({type: 'messageCreate', message: message, author: author, chatId: Number(chatId) });

    setTimeout(() => dispatch({type: 'messageCreate', message: message, author: 'bot', chatId: Number(chatId) }), 2000);
}