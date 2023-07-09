import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/search.css'

const Search = (props) => {

    let server = process.env.REACT_APP_BACKEND_URL;

    const handleSearch = () => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    server+'/discogs-client/', {
                    params: {
                        discogsId: props.searchTerm}
                    }
                );

                props.loadResults(data);

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