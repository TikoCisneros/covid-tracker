import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/header';
import { DEFAULT_COUNTRY, BASE_URL } from '../../common/constants';
import { transformCountryData, sortByHighCases } from '../../common/countries';

import { Container, Content } from './layout.styles';
import Graphs from '../../components/graphs';
import Countries from '../../components/countries';


const Layout = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(DEFAULT_COUNTRY.value);
  const [cases, setCases] = useState({ confirmed: 0, recovered: 0, deaths: 0 });

  const loadCountries = () => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/countries`);
        setCountries(data);
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
    <Container>
      <Header
        cases={cases}
        countries={transformCountryData(countries)}
        selectedCountry={country}
        onSelectCountry={handleCountrySelection}
      />
      <Content>
        <Graphs />
        <Countries data={sortByHighCases(countries)} />
      </Content>
    </Container>
  );
};

export default Layout;