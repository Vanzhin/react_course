import {getAllFirebaseMessagesFailure, getAllFirebaseMessagesLoading, getAllFirebaseMessagesSuccess} from "../actions";
import {db} from "../../services/firebase";
import {addMessage} from "../reducers/messageReducer";

export const getAllFirebaseMessages = () =>  (dispatch) => {
     dispatch(getAllFirebaseMessagesLoading(true))
    try {
         db.ref("messages").on("value", (snapshot) => {
            snapshot.forEach(entry => {
                for (let item in entry.val()) {
                    for (let author in entry.val()[item]) {
                        for (let mesId in entry.val()[item][author]) {
                            let message = entry.val()[item][author][mesId]
                            dispatch(addMessage({message: message, author: author, chatId: entry.key, id: mesId}));
                        }
                    }

                }

            });
        });
        dispatch(getAllFirebaseMessagesSuccess())
    } catch (error) {
        dispatch(getAllFirebaseMessagesFailure(error.message))
    } finally {
        dispatch(getAllFirebaseMessagesLoading(false))
    }

}



