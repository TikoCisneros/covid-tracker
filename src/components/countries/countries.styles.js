import styled from 'styled-components';

import {
  CardContent as MUICardContent,
} from '@material-ui/core';

const Table = styled.div`
  padding: 0 5px;
  overflow: scroll;
  height: 60vh;

  tr {
    display: flex;
    justify-content: space-between;
    padding: 2px 0;
  }

  tr:nth-child(odd) {
    background-color: #f7f7f7;
  }

  td {
    padding: 0.4rem;
    border: none;
  }
`;

const Image = styled.img`
  width: 30px; 
  height: 20px; 
  object-fit: cover; 
  padding: 0 5px;
`;

const CountryRow = styled.td`
  width: 100%;
`;

const CasesRow = styled.td`
  font-weight: bold;
`;

const TotalCasesLabel = styled.div`
  text-align: right;
  font-style: italic;
  padding: 0 8px;
`;

export {
  Table,
  Image,
  CasesRow,
  CountryRow,
  TotalCasesLabel,
};