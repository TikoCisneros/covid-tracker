import React from 'react';

import {
  Card as MUICard,
  CardContent as MUICardContent,
} from '@material-ui/core';

const Graphs = () => {
  return (
    <MUICard style={{ flex: 1, marginRight: '5px' }}>
      <MUICardContent>
        <h3>Graphs</h3>
      </MUICardContent>
    </MUICard>
  )
}

export default Graphs;