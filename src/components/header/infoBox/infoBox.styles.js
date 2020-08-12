import styled from 'styled-components';

import {
  Card as MUICard,
  CardContent as MUICardContent,
  CardActions as MUICardActions,
} from '@material-ui/core';

import { COVID_CASES_TYPES } from '../../../common/constants';

const Card = styled(MUICard)`
  width: 160px;
  margin: 5px 10px;
`;

const getCardContentBackgroundColor = (type) => {
  switch (type) {
    case COVID_CASES_TYPES.CONFIRMED:
      return '#fff5f5';
    case COVID_CASES_TYPES.RECOVERED:
      return '#f0fff4';
    case COVID_CASES_TYPES.DEATHS:
    default:
      return '#edf2f7';
  }
};

const CardContent = styled(MUICardContent)`
  display: flex;
  justify-content: center;
  background-color: ${({ type }) => getCardContentBackgroundColor(type)};
`;

const getCardActionsBackgroundColor = (type) => {
  switch (type) {
    case COVID_CASES_TYPES.CONFIRMED:
      return '#fed7d7';
    case COVID_CASES_TYPES.RECOVERED:
      return '#c6f6d5';
    case COVID_CASES_TYPES.DEATHS:
    default:
      return '#e2e8f0';
  }
};

const CardActions = styled(MUICardActions)`
  background-color: ${({ type }) => getCardActionsBackgroundColor(type)};
  justify-content: center;
`;

const getTextColor = (type) => {
  switch (type) {
    case COVID_CASES_TYPES.CONFIRMED:
      return '#e53e3e';
    case COVID_CASES_TYPES.RECOVERED:
      return '#38a169';
    case COVID_CASES_TYPES.DEATHS:
    default:
      return '#718096';
  }
};

const TotalCases = styled.span`
  font-size:24px;
  color: ${({ type }) => getTextColor(type)};;
`;

const Category = styled.strong`
  font-size: 18px;
  color: ${({ type }) => getTextColor(type)};;
`;

export {
  Card,
  CardContent,
  CardActions,
  TotalCases,
  Category,
};