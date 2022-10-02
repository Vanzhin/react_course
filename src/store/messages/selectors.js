export function getMessagesByChat(chatId) {
    return (state) => state.messages.messages.filter(message => {
        return message.chatId === Number(chatId)
    });
}