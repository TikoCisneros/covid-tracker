import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { normalizeNumber } from '../../common/normalizers';

import {
  Table,
  Image,
  CasesRow,
  CountryRow,
  TotalCasesLabel,
} from './countries.styles';

const Countries = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">Countries affected</Typography>
      <TotalCasesLabel>Total cases</TotalCasesLabel>
      <Table>
        {data.map(({ country, cases, countryInfo: { iso2, flag } }) => (
          <tr key={iso2}>
            <td><Image src={flag} alt={iso2} /></td>
            <CountryRow>{country}</CountryRow>
            <CasesRow>{normalizeNumber(cases)}</CasesRow>
          </tr>
        ))}
      </Table>
    </CardContent>
  </Card>
);

export default React.memo(Countries);
