import React from 'react'

function SearchBar({setSearchItem}) {
  return (
    <form onSubmit={e => {
        e.preventDefault()
        setSearchItem(e.target[0].value)
        }}>
    <input
    type="text"
    placeholder="Search beers..."
    className="search-bar"
    />
    <button>Search</button>
    </form>
  );
}

export default SearchBar;
