const DEFAULT_COUNTRY = { 
  name: 'Global', 
  value: 'global' 
};

const DEFAULT_MAP_VALUES = { 
  zoom: 2, 
  center: [ 34.80746, -40.4796 ], 
};

const BASE_URL = 'https://disease.sh/v3/covid-19';

const COVID_CASES_TYPES = {
  CONFIRMED: 'cases',
  RECOVERED: 'recovered',
  DEATHS: 'deaths',
};

export {
  DEFAULT_COUNTRY,
  DEFAULT_MAP_VALUES,
  COVID_CASES_TYPES,
  BASE_URL,
};