const normalizeNumber = (value) => new Intl.NumberFormat('us-US').format(value);

const upperCaseFirstLetter = (string) => string.charAt(0).toUpperCase().concat(string.slice(1));

export { normalizeNumber, upperCaseFirstLetter };