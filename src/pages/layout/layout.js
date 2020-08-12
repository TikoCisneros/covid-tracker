import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/header';
import { DEFAULT_COUNTRY, BASE_URL } from '../../common/constants';

const Layout = () => {
  const [countries, setCountries] = useState([]);
  // const [countriesCases, setCountriesCases] = useState([]);
  const [country, setCountry] = useState(DEFAULT_COUNTRY.value);
  const [cases, setCases] = useState({ confirmed: 0, recovered: 0, deaths: 0 });

  const loadCountries = () => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/countries`);
        const transformedCounties = data.map(({ country, countryInfo: { iso2 }}) => ({ name: country, value: iso2 }));
        setCountries(transformedCounties);
        // setCountriesCases(data);
      } catch (_error) { }
    }

    fetchCountries();
  }

  const loadGlobalCases = () => {
    const fetchGlobalCases = async () => {
      try {
        const { data: { cases, recovered, deaths} } = await axios.get(`${BASE_URL}/all`);
        setCases({ confirmed: cases, recovered, deaths });
      } catch (_error) { }
    }

    fetchGlobalCases();
  }

  const loadCountryCases = () => {
    const fetchCountryCases = async () => {
      try {
        const { data: { cases, recovered, deaths} } = await axios.get(`${BASE_URL}/countries/${country}`);
        setCases({ confirmed: cases, recovered, deaths });
      } catch (_error) { }
    }

    fetchCountryCases();
  }

  const handleFetchCountryData = () => {
    if (country === DEFAULT_COUNTRY.value) {
      loadGlobalCases();
      return;
    }

    loadCountryCases();
  }
  
  useEffect(() => {
    loadCountries();
    loadGlobalCases();
  }, []);

  useEffect(handleFetchCountryData, [country]);

  const handleCountrySelection = (event) => setCountry(event.target.value);

  return (
    <div>
      <Header
        cases={cases}
        countries={countries}
        selectedCountry={country}
        onSelectCountry={handleCountrySelection}
      />
  
      {/** TABLE */}
  
      {/** MAP */}
    </div>
  );
};

export default Layout;