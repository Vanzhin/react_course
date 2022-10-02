export function getChat(chatId) {
    return (state) => state.chats.chats.filter(chat => {
        return chat.id === Number(chatId)
    });
}