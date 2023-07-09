import PriceSuggestion from "./PriceSuggestion";
import React from 'react';
import './styles/results.css';

const Results = (props) => {

    const currency = props.currency;

    const currencySymbols = {
        'GBP': '£',
        'USD': '$',
        'EUR': '€',
    }

    const currencySymbol = (currencyCode) => {
        return currencySymbols[currencyCode];
    }

    const roundValue = (value) => {
        return Math.round((value + Number.EPSILON) * 100) / 100
    }

    return(
        <div className='container'>
            {props.priceSuggestions.map(([condition, { currency, value }]) => (
                <div key={condition} className='item'>
                    <h3>{condition}</h3>
                    <p>{currencySymbol(currency)} {roundValue(value)}</p>
                </div>
            ))}
        </div>
        
    )
}

export default Results;