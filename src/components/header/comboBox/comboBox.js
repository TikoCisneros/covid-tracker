import React from 'react';

import styled from 'styled-components';
import {
  MenuItem,
  Select, 
  Typography,
} from '@material-ui/core';

import { DEFAULT_COUNTRY } from '../../../common/constants';

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Selector = styled(Select)`
  min-width: 280px;
`;

const Description = styled(Typography)`
  padding-bottom: 4px;
`;

const ComboBox = ({
  description,
  data, 
  selectedData,
  onSelectData,
}) => (
  <SelectorContainer>
    <Description variant="h6">{description}</Description>
    <Selector
      variant="outlined"
      value={selectedData}
      onChange={onSelectData}
    >
      <MenuItem value={DEFAULT_COUNTRY.value}>{DEFAULT_COUNTRY.name}</MenuItem>
      {data.map(({ name, value}, index) => <MenuItem key={index + 1} value={value}>{name}</MenuItem>)}
    </Selector>
  </SelectorContainer>
);

export default ComboBox;