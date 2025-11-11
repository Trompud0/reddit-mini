import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubReddit } from "../../features/subRedditSlice.js";
import SubRedditItem from "../SubRedditItem/SubRedditItem.jsx";
import { fetchFeed } from "../../features/feedSlice.js";
import "./SubReddits.css";

const SubReddits = () => {
    const subReddits = useSelector((state) => state.subReddits.subReddits);
    const isLoading = useSelector((state) => state.subReddits.isLoading);
    const error = useSelector((state) => state.subReddits.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubReddit());
    }, [dispatch]);

    const handleSelect = (subRedditName) => {
      dispatch(fetchFeed(`${subRedditName}`));
    }

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

    if(subReddits.length === 0) {
      return (
        <div>
          <p>No SubReddits Found</p>
        </div>
      )
    }

    return (
        <div className="subRedditSection">
          <h2>SubReddits</h2>  
          {subReddits.map(subReddit => (
            <SubRedditItem key={subReddit.data.id} subReddit={subReddit.data} onSelect={handleSelect}/>
            ))}
        </div>
    )
}

export default SubReddits;