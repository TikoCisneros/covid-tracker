import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/header';
import { DEFAULT_COUNTRY, DEFAULT_MAP_VALUES, BASE_URL, COVID_CASES_TYPES } from '../../common/constants';
import { transformCountryData, sortByHighCases } from '../../common/countries';

import { Container, Content } from './layout.styles';
import Graphs from '../../components/graphs';
import Countries from '../../components/countries';


const Layout = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(DEFAULT_COUNTRY.value);
  const [cases, setCases] = useState({ cases: 0, recovered: 0, deaths: 0 });
  const [mapCenter, setMapCenter] = useState(DEFAULT_MAP_VALUES.center);
  const [mapZoom, setMapZoom] = useState(DEFAULT_MAP_VALUES.zoom);

  const loadCountries = () => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/countries`);
        setCountries(data);
      } catch (_error) { }
    }

    fetchCountries();
  }

  const loadCountryCases = () => {
    const fetchCountryCases = async () => {
      try {
        const url = (country === DEFAULT_COUNTRY.value) ? `${BASE_URL}/all` : `${BASE_URL}/countries/${country}`;
        
        const { data: { cases, recovered, deaths, countryInfo } } = await axios.get(url);
        setCases({ cases, recovered, deaths });

        const zoom = (country === DEFAULT_COUNTRY.value) ? DEFAULT_MAP_VALUES.zoom : 4;
        const center = (country === DEFAULT_COUNTRY.value) ? DEFAULT_MAP_VALUES.center : [countryInfo.lat, countryInfo.long];
        setMapZoom(zoom);
        setMapCenter(center);
      } catch (_error) { }
    }

    fetchCountryCases();
  }
  
  useEffect(loadCountries, []);

  useEffect(loadCountryCases, [country]);

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
        <Graphs
          mapCenter={mapCenter}
          mapZoom={mapZoom}
          mapCountries={countries}
          mapCasesType={COVID_CASES_TYPES.RECOVERED}
        />
        <Countries data={sortByHighCases(countries)} />
      </Content>
    </Container>
  );
};

export default Layout;