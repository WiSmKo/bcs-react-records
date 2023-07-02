import React from 'react';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        props.onSearch(event);
    }

    return(
        <div>
            <label htmlFor="search">Enter Discogs ID: </label>
            <input id="search" type="text" onChange={handleChange}/>
        </div>
    )
}

export default Search;