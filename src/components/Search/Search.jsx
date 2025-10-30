import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../features/searchSlice.js";
import { fetchFeed } from "../../features/feedSlice.js";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const onSearchTermSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchFeed(searchTerm));
  }

  return (
    <div className="searchForm">
      <form onSubmit={onSearchTermSubmit}>
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Search;