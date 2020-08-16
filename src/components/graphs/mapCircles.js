// https://github.com/CleverProgrammers/react-covid-tracker
import React from 'react';
import { Circle, Popup } from 'react-leaflet';

import {
  InfoContainer,
  InfoName,
  InfoLabel,
} from './map.styles';

import { COVID_CASES_TYPES } from '../../common/constants';
import { normalizeNumber } from '../../common/normalizers';


const casesTypeColors = {
  cases: {
    hex: '#e53e3e',
    multiplier: 800,
  },
  recovered: {
    hex: '#38a169',
    multiplier: 1200,
  },
  deaths: {
    hex: '#718096',
    multiplier: 2000,
  },
};

const MapCircles =
  ({data, casesType = COVID_CASES_TYPES.CONFIRMED}) =>
  data.map((country, index) => (
    <Circle
      key={index + 1}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}
    >
      <Popup>
        <InfoContainer>
          <InfoName>{country.country}</InfoName>
          <InfoLabel>
            Cases: {normalizeNumber(country.cases)}
          </InfoLabel>
          <InfoLabel>
            Recovered: {normalizeNumber(country.recovered)}
          </InfoLabel>
          <InfoLabel>
            Deaths: {normalizeNumber(country.deaths)}
          </InfoLabel>
        </InfoContainer>
      </Popup>
    </Circle>
  ));

export default MapCircles;