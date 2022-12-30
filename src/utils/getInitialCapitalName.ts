const getInitialCapitalName = (name?: string, length = 1) => {
  const capitalName =
    name === undefined
      ? 'U'
      : name
          .trim()
          .split(' ')
          .map((name) => name[0].toUpperCase())
          .join('')
          .slice(0, length);
  return capitalName;
};

export default getInitialCapitalName;
