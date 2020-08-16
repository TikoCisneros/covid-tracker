const sortByHighCases = (countries) => countries.sort((a, b) => {
  if (a.cases > b.cases) {
    return -1;
  }
  return 1;
});

const transformCountryData = (countries) => countries.map(({ country, countryInfo: { iso2 }}) => ({ name: country, value: iso2 }));

export {
  sortByHighCases,
  transformCountryData,
}