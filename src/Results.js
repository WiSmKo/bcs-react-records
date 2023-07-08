import PriceSuggestion from "./PriceSuggestion";
import React from 'react';
import './styles/results.css';

const Results = (props) => {

    let id = 0;

    const resolveId = (num) => {
        const currentId = num;
        id = currentId + 1;
        return currentId;
    }


    return(
        <ul>
            {props.priceSuggestions.map((priceSuggestion) => (
                <PriceSuggestion id={resolveId(id)} currency={priceSuggestion.currency} value={priceSuggestion.value} />
            ))}
        </ul>
        
    )
}

export default Results;