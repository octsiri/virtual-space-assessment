import {convertValueToUnit, getInitialCapitalName} from '../utils';

describe('Functional test for global utils', () => {
  test('it should convert value to certain unit format in string', () => {
    const marginLeft = 10;
    const unitFormat = 'px';
    expect(convertValueToUnit(marginLeft, unitFormat)).toStrictEqual('10px');
  });

  test('it should trims text to have 2 initial capital only', () => {
    const username = 'Dominggus Octovianus';
    expect(getInitialCapitalName(username, 2)).toStrictEqual('DO');
  });

  test('it should trims text to have 4 initial capital only', () => {
    const username = 'Lari Pagi Pagi';
    expect(getInitialCapitalName(username, 3)).toStrictEqual('LPP');
  });
});

export {};
