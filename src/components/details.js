import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../index.css';

const CountryDetails = () => {
  const { fName } = useParams();

  const { StateInfo } = useSelector((state) => state.country);
  const currentState = StateInfo.find((country) => country.name === fName);

  return (
    <>
      <div className="state-details">
        <div className="img-div">
          <h1 className="h1-text">{currentState?.name || 'N/A'}</h1>
          <img
            src={currentState.flag}
            alt={currentState.name}
            className="state-flag"
          />
        </div>
        <div className="status-bar">
          <h2 className="state-status">City/Town BreakDown - 2023</h2>
        </div>
        <h2 className="state-info">
          <span>Name:</span>
          {currentState?.name || 'N/A'}
        </h2>
        <h2 className="state-info">
          <span>Capital:</span>
          {currentState?.capital || 'N/A'}
        </h2>
        <h2 className="state-info">
          <span>Continent:</span>
          {currentState?.continent || 'N/A'}
        </h2>
        <h2 className="state-info">
          <span>Population:</span>
          {currentState?.population || 'N/A'}
        </h2>
        <h2 className="state-info">
          <span>Area:</span>
          {currentState?.area ? `${currentState.area} km²` : 'N/A'}
        </h2>
        {currentState?.map && (
          <h2 className="state-info">
            <a href={currentState.map}>Map</a>
          </h2>
        )}
      </div>
    </>
  );
};

export default CountryDetails;
