import './App.css';
import Search from './Search';

function App() {

  const handleSearch = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className='App'>
      <Search onSearch={handleSearch}/>
    </div>
    
  );
}

export default App;
