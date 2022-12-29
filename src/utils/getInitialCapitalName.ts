const getInitialCapitalName = (name?: string) => {
  const capitalName =
    name === undefined
      ? 'U'
      : name
          .trim()
          .split(' ')
          .map((name) => name[0].toUpperCase())
          .join('');
  return capitalName;
};

export default getInitialCapitalName;
