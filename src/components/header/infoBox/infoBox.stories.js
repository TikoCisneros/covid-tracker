import React from 'react';
import InfoBox from './infoBox';
import { COVID_CASES_TYPES } from '../../../common/constants';

export default {
  component: InfoBox,
  title: 'InfoBox',
  decorators: [story => <div style={{ padding: '2rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

const defaultPropsData = {
  title: 'Title',
  value: 200000,
};

export const deathPropsData = {
  ...defaultPropsData,
  type: COVID_CASES_TYPES.DEATHS,
};

export const recoveredPropsData = {
  ...defaultPropsData,
  type: COVID_CASES_TYPES.RECOVERED,
};

export const confirmedPropsData = {
  ...defaultPropsData,
  type: COVID_CASES_TYPES.CONFIRMED,
};

export const Deaths = () => <InfoBox {...deathPropsData} />;

export const Recovered = () => <InfoBox {...recoveredPropsData} />;

export const Confirmed = () => <InfoBox {...confirmedPropsData} />;
