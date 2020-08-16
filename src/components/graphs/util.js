import React from 'react';
import { Circle, Popup } from 'react-leaflet';

import {
  InfoContainer,
  InfoFlag,
  InfoName,
  InfoLabel,
} from './map.styles';

import { COVID_CASES_TYPES } from '../../common/constants';
import { normalizeNumber } from '../../common/normalizers';


const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

const drawMapCircles =
  (data, casesType = COVID_CASES_TYPES.CONFIRMED) =>
  data.map((country, index) => (
    <Circle
      key={index + 1}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <InfoContainer>
          <InfoFlag
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
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

export {
  drawMapCircles,
};