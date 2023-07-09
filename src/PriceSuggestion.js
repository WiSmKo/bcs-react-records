import React from 'react';

const PriceSuggestion = (props) => {

    const condition = props.condition;
    const currency = props.currency;
    const value = props.value;

    const currencySymbols = {
            'GBP': '£',
            'USD': '$',
            'EUR': '€',
    }

    const currencySymbol = currencySymbols[currency];

    return(
        <li>
            <span>{currencySymbol}</span> 
            <span>{value}</span>
        </li>
    )

}

export default PriceSuggestion;