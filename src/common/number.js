const normalizeNumber = (value) => new Intl.NumberFormat('us-US').format(value);

export { normalizeNumber };