const convertValueToUnit = (input?: number | string, unit = 'px'): string => {
  if (input === undefined) {
    return '0px';
  }
  if (typeof input === 'number' && !Number.isNaN(input)) {
    return `${input}${unit}`;
  }
  return input.toString();
};

export default convertValueToUnit;
