const DEFAULT_COUNTRY = { 
  name: 'Global', 
  value: 'global' 
};

const BASE_URL = 'https://disease.sh/v3/covid-19';

const COVID_CASES_TYPES = {
  CONFIRMED: 'confirmed',
  RECOVERED: 'recovered',
  DEATHS: 'deaths',
};

export {
  DEFAULT_COUNTRY,
  COVID_CASES_TYPES,
  BASE_URL,
};