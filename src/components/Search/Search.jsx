import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../features/searchSlice.js";
import { fetchFeed } from "../../features/feedSlice.js";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const onSearchTermSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchFeed(searchTerm));
  }

  return (
    <>
      <form onSubmit={onSearchTermSubmit} className="searchForm">
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search"></input>
        <button type="submit" className="search-button"><img src="/search-image.jpg" alt="Search" className="searchImage"/></button>
      </form>
    </>
  )
}

export default Search;