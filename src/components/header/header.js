import React from 'react';
import styled from 'styled-components';

import ComboBox from './comboBox';
import InfoBox from './infoBox';

import { COVID_CASES_TYPES } from '../../common/constants';
import { upperCaseFirstLetter } from '../../common/normalizers';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border: 1px solid rgb(203, 213, 224);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Header = ({ cases, countries, selectedCountry,  onSelectCountry }) => (
  <HeaderContainer>
    <ComboBox
      description="Stats Overview"
      data={countries}
      selectedData={selectedCountry}
      onSelectData={onSelectCountry}
    />
    <InfoContainer>
      {Object.values(COVID_CASES_TYPES)
        .map((type, index) => <InfoBox key={index + 1} type={type} title={upperCaseFirstLetter(type)} value={cases[type]} />)}
    </InfoContainer>
  </HeaderContainer>
);

export default Header;