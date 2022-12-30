const getInitialCapitalName = (username?: string, length = 1) => {
  const capitalName = !username
    ? 'U'
    : username
        .trim()
        .split(' ')
        .map((username) => username[0].toUpperCase())
        .join('')
        .slice(0, length);
  return capitalName;
};

export default getInitialCapitalName;
