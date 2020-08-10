import React from 'react';
import styled from 'styled-components';

import ComboBox from './comboBox';
import InfoBox from './infoBox';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border: 1px solid rgb(203, 213, 224);
`;

const Header = ({ cases, countries, selectedCountry,  onSelectCountry }) => (
  <HeaderContainer>
    <ComboBox
      description="Stats Overview"
      data={countries}
      selectedData={selectedCountry}
      onSelectData={onSelectCountry}
    />
    <InfoBox
      title="Confirmed"
      value={cases.confirmed}
    />
    <InfoBox
      title="Recovered"
      value={cases.recovered}
    />
    <InfoBox
      title="Deaths"
      value={cases.deaths}
    />
  </HeaderContainer>
);

export default Header;