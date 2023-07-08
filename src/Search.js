import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/search.css'

const Search = (props) => {

    // const [suggestions, setSuggestions] = useState([]);

    const handleSearch = () => {
        const fetchData = async () => {
            console.log(props.searchTerm);
            try {
                const { data } = await axios.get(
                    'http://localhost:3000/discogs-client/', {
                    params: {
                        discogsId: props.searchTerm}
                    }
                );

                props.loadResults(data);
                console.log("Request completed");
                console.log(data);
            } catch(error) {
                console.log(error)
            }
        };

        fetchData();
    };

    return(
        <div className="searchBox">
            <label htmlFor="search">Discogs ID: </label>
            <input id="search" type="text" onChange={props.onChange}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;