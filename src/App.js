import './styles/App.css';
import Search from './Search';
import Results from './Results';
import React from 'react';

const App = () => {

  const [priceSuggestions, setPriceSuggestions] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  }

  const loadResults = (results) => {
    
    setPriceSuggestions(Object.entries(results));
    console.log("Load Results Method");
    console.log(results);
    console.log(Object.entries(results));
    console.log({priceSuggestions});
    console.log("--------------------");
  }

  return (
    <div className='App'>
      <div className="header">
        <Search onChange={handleChange} searchTerm={searchTerm} loadResults={loadResults}/>
      </div>

      <div className='body'>
        <Results priceSuggestions = {priceSuggestions} />
      </div>
    </div>
  );
}

export default App;
