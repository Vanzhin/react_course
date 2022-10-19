import {getAllFirebaseMessagesFailure, getAllFirebaseMessagesLoading, getAllFirebaseMessagesSuccess} from "../actions";
import {db} from "../../services/firebase";
import {addMessage} from "../reducers/messageReducer";

export const getAllFirebaseMessages = (chatId) => async (dispatch) => {
    dispatch(getAllFirebaseMessagesLoading(true))
    try {
        await db.ref("messages").child(chatId).on("value", (snapshot) => {
            snapshot.forEach(entry => {
                const {author, text, uid, id} = entry.val();
                    dispatch(addMessage({message: text, author: author, uid: uid, id:id, chatId:chatId}));
            });
        });
        dispatch(getAllFirebaseMessagesSuccess())
    } catch (error) {
        dispatch(getAllFirebaseMessagesFailure(error.message))
    } finally {
        dispatch(getAllFirebaseMessagesLoading(false))
    }

}




