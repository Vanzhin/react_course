import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Alert, Button, CircularProgress} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import CommentList from "../components/CommentList";
import {
    getAllComments,
    selectComments,
    selectCommentsError,
    selectCommentsLoading, selectCommentsStatus
} from "../redux/middlewares/commentMiddleWare";

function CommentsPage(props) {
    const dispatch = useDispatch();
    const storedComments = useSelector(selectComments);
    const loading = useSelector(selectCommentsLoading);
    const error = useSelector(selectCommentsError);
    const status = useSelector(selectCommentsStatus);
    const [currentComments, setCurrentComments] = useState([]);
    const requestComments = () => {

        dispatch(getAllComments())
    }

    useEffect(() => {
        requestComments();
    }, []);
    const getComment = (limit) => {
        let result = [];

        for (let i = currentComments.length; i < currentComments.length + limit; i++) {
            result.push(storedComments[i])
        }
        setCurrentComments([...currentComments, ...result])
    }
    if (loading) {
        return <div style={{display:'flex',flexDirection:'column'}}>
            <div>{status.toUpperCase()}</div>
            <CircularProgress/>
        </div>
    }

    if (error) {
        return (
            <>
                <Alert severity="error">{error}</Alert>
                <Button variant="outlined" endIcon={<DownloadIcon/>} onClick={() => requestComments()}>retry</Button>

            </>);
    }


    return (
        <div>
            <div>всего комментариев: {storedComments.length}</div>
            <div>показано комментариев: {currentComments.length}</div>
            <Button variant="outlined" endIcon={<DownloadIcon/>} onClick={() => getComment(10)}>get comments</Button>
            {currentComments.map(comment => (
                    <CommentList key={comment.id} comment={comment}/>
                )
            )}
        </div>
    );
}

export default CommentsPage;