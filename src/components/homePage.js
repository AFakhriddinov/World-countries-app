import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../index.css';
import backgroud from '../images/backround.e8e3d87f186997fd15d8.png';

const HomePage = () => {
  const { StateInfo } = useSelector(({ country }) => country);

  const [searchState, setSearchState] = useState('');

  const renderSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchState(searchValue);
  };

  const mappedState = StateInfo.filter((stateItem) => stateItem.name.toLowerCase().includes(searchState));

  return (
    <>
      <div className="header">
        <img src={backgroud} alt="banner-img" className="contryImg " />
      </div>
      <input
        type="text"
        value={searchState}
        onChange={renderSearch}
        placeholder="Search a country here"
        className="search-input"
      />
      <div className="status-bar">
        <h2 className="country-status">Stats by Country</h2>
      </div>
      <div className="div">
        {mappedState.map((country) => (
          <Link
            to={`/countries/${country.name}`}
            key={`${country.name}${country.population}`}
            className="container"
          >
            <img src={country.flag} alt={country.name} className="flag" />
            <div className="info">
              <h2 className="name">{country.name}</h2>
              <h2 className="population">{country.population}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
