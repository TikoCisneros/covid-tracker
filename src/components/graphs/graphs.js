import React from 'react';

import {
  Card as MUICard,
  CardContent as MUICardContent,
  Typography,
} from '@material-ui/core';

import { Map, TileLayer } from 'react-leaflet';

import { drawMapCircles } from "./util";

const Graphs = ({ mapCasesType, mapCenter, mapZoom, mapCountries }) => {
  return (
    <MUICard style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '0 5px 10px 0',
    }}>
      <Typography variant="h6" style={{ padding: '20px 20px 0' }}>Graphs info</Typography>
      <MUICardContent style={{ height: '55vh' }}>
        <Map style={{ height: '100%' }} center={mapCenter} zoom={mapZoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {drawMapCircles(mapCountries, mapCasesType)}
        </Map>
      </MUICardContent>
    </MUICard>
  )
}

export default Graphs;