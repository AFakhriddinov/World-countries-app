import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './components/homePage';
import { fetchStateInfo } from './Redux/Country/countrySlice';
import CountryDetails from './components/details';
import Nav from './components/nav';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStateInfo());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Nav />}>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/countries/:fName" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
