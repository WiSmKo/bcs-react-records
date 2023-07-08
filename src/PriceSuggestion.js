import React from 'react';

const PriceSuggestion = (props) => {

    const id = props.id;
    // const currency = props.currency;

    const [currency, setCurrency] = React.useState('');
    const value = props.value;

    const currencySymbols = {
            'GBP': '£',
            'USD': '$',
            'EUR': '€',
    }

    const currencySymbol = currencySymbols[props.currency];

    return(
        <li>
            <span>{currencySymbol}</span>
            <span>{value}</span>
        </li>
    )

}

export default PriceSuggestion;