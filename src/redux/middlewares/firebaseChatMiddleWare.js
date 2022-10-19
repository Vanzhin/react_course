import {
    getAllFirebaseChatsFailure, getAllFirebaseChatsLoading,
    getAllFirebaseChatsSuccess,
} from "../actions";
import {db} from "../../services/firebase";

export const getAllFirebaseChats = () => async (dispatch) => {
    dispatch(getAllFirebaseChatsLoading(true))
    try {
        await db.ref("messages").on("value", (snapshot) => {
            snapshot.forEach(entry => {
                dispatch({type: 'chatCreate', payload: {id: entry.key}});
            });
        });
        dispatch(getAllFirebaseChatsSuccess())
    } catch (error) {
        dispatch(getAllFirebaseChatsFailure(error.message))
    } finally {
        dispatch(getAllFirebaseChatsLoading(false))
    }

}




