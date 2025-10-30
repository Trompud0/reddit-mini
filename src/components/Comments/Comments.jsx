import { fetchComments } from "../../features/feedSlice.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Comments = ({subreddit, postId}) => {
    const comments = useSelector((state) => state.feed.comments[postId] || []);
    console.log('comments for', postId, comments);
    const isLoading = useSelector((state) => state.feed.commentsLoading[postId]);
    const error = useSelector((state) => state.feed.commentsError[postId]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments({subreddit, postId}));
    }, [dispatch, subreddit, postId]);

    if(isLoading) {
      return (
        <div>
            <p>Loading comments...</p>
        </div>
      )
    }

    if(error) {
      return (
        <div>
            <p>Error loading comments.</p>
        </div>
      )
    }

    console.log('comments in render:', comments);

    if(comments.length === 0) {
        return(
            <div>
                <p>No Comments Found</p>
            </div>
        )
    }

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.data.id}>
          <p>{comment.data.author}:{comment.data.body}</p>
        </div>
      ))}
    </div>
  )
};

export default Comments;