import { useState, useEffect } from 'react';
import { doctors } from './Hdata';
import './Hdetails.css';
import { useLocation } from 'react-router-dom';

const Hdetails = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');
  const location = useLocation();
  const locate = location.state.ide;

  useEffect(() => {
    const filtered = doctors.filter((item) => item.id === locate);
    setFilteredItems(filtered);

    if (filtered.length === 0) {
      setSearchMessage('No matching names found.');
    } else {
      setSearchMessage('');
    }
  }, [locate]);

  return (
    <div className='Search'>
      <h1>Search Page</h1>
      <button className='search-btn'>Search</button>
      {searchMessage && <p>{searchMessage}</p>}
      <div className='search-ul'>
        {filteredItems.map((item) => (
          <div className='search-span' key={item.name}>
            <div className='search-span-in'>
              <img src={item.imgId} alt="Image" className='search-image' />
              <br />
              {item.name}
              <br />
              {item.address}
              <br />
              {item.contact}
              <button className={`search-btn`}>View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hdetails;
