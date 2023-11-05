import { useState } from 'react';
import { items } from './data';
import './SearchPage.css'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const SearchPage = () => {

 
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');
  const [suggestedItems, setSuggestedItems] = useState([]);

  const navigate = useNavigate();

  

  const handleSearch = () => {
    const searchTerms = searchQuery.split(',').map(term => term.trim().toLowerCase());
    const filtered = items.filter((item) => {
      
      const itemName = item.name.toLowerCase();
      return searchTerms.some(term => itemName.includes(term));
    });

    setFilteredItems(filtered);

    if (filtered.length === 0) {
      setSearchMessage('No matching names found.');
    } else {
      setSearchMessage('');
    }

    const suggested = items.filter((item) => {
      const itemName = item.name.toLowerCase();
      return searchTerms.some(term => itemName.includes(term)) && !filtered.includes(item);
    });
    setSuggestedItems(suggested);
  };

  return (
    <div className='Search'>
      <h1>Search Page</h1>
      <input
        type="text"
        className='search-input'
        placeholder="Search by Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch} className='search-btn' >Search</button>
      {searchMessage && <p>{searchMessage}</p>}
      <div className='search-ul'>
        {searchQuery === '' ? (
          items.map((item) => (
            <div className='search-span' key={item.id}>
              <div className='search-span-in'>
                <img src={item.imgId} alt="Image" className='search-image' />
                <br />
                {item.name}
                <br />
                {item.address}
                <br />
                {item.contact}
                
              <button className={`search-btn`} onClick={()=>{navigate('/hdet',{state:{ide:item.id}})}}>View More</button>
              </div>
            </div>
          ))
        ) : (
          filteredItems.map((item) => (
            <div className='search-span' key={item.id}>
              <div>
                <img src={item.imgId} alt="Image" className='search-image' />
                {item.name}
                <br />
                {item.address}
                <br />
                {item.contact}

                <button className={`search-btn`} onClick={()=>{navigate('/hdet',{state:{ide:item.id}})}}>View More</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        {suggestedItems.length > 0 && <p>Suggested: {suggestedItems.map(item => item.name).join(', ')}</p>}
      </div>
    </div>
  );
};

export default SearchPage;
