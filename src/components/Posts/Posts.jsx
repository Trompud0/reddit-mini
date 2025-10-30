import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeed } from "../../features/feedSlice.js";
import Post from "../Post/Post.jsx";

const Posts = () => {
    const posts = useSelector((state) => state.feed.posts);
    const isLoading = useSelector((state) => state.feed.isLoading);
    const error = useSelector((state) => state.feed.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFeed('javascript'));
    }, [dispatch]);

    if(isLoading) {
        return (
            <div>
              <p>Loading...</p>
            </div>
        )
    }

    if(error) {
      return (
        <div>
          {error}
        </div>
      )
    }

    if(posts.length === 0) {
      return (
        <div>
          <p>No Posts Found</p>
        </div>
      )
    }

    return (
        <>
          {posts
            .filter(post => post.data && post.data.title && post.data.author && post.data.created_utc)
            .map(post => (
            <Post key={post.data.id} post={post.data}/>
           ))}
        </>
    )
}

export default Posts;