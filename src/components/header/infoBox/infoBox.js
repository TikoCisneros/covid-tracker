import React from 'react';

import {
  Card,
  CardContent,
  CardActions,
  TotalCases,
  Category,
} from './infoBox.styles';
import { normalizeNumber } from '../../../common/normalizers';

const InfoBox = ({ type, title, value, onPress }) => (
  <Card elevation={3}>
    <CardContent type={type}>
      <TotalCases type={type}>{normalizeNumber(value)}</TotalCases>
    </CardContent>
    <CardActions type={type}>
      <Category type={type}>{title}</Category>
    </CardActions>
  </Card>
);

export default InfoBox;
