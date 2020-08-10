import React from 'react';

import {
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { normalizeNumber } from '../../../common/number';

const InfoBox = ({ title, value, onPress }) => (
  <Card>
    <CardContent>
      <strong>{normalizeNumber(value)}</strong>
    </CardContent>
    <CardActions>
      <strong>{title}</strong>
    </CardActions>
  </Card>
);

export default InfoBox;
