import {
  mapDataToTotalCases,
  mapDataToNewCases,
  mapDataToTotalDeaths,
  mapDataToTotalRecoveredCases
} from './mappings';

const APIData = [
  {
    id: '384',
    country_name: 'Ecuador',
    total_cases: '111',
    new_cases: '53',
    total_deaths: '4',
    total_recovered: '1',
    record_date: '2020-03-16 21:00:05.485'
  },
  {
    id: '549',
    country_name: 'Ecuador',
    total_cases: '112',
    new_cases: '52',
    total_deaths: '5',
    total_recovered: '2',
    record_date: '2020-03-17 21:10:02.648'
  },
  {
    id: '714',
    country_name: 'Ecuador',
    total_cases: '113',
    new_cases: '51',
    total_deaths: '6',
    total_recovered: '3',
    record_date: '2020-03-18 21:20:01.595'
  }
];

const expectedTotalCasesData = [
  { y: 111, x: '2020-03-16' },
  { y: 112, x: '2020-03-17' },
  { y: 113, x: '2020-03-18' }
];

const expectedNewCasesData = [
  { y: 53, x: '2020-03-16' },
  { y: 52, x: '2020-03-17' },
  { y: 51, x: '2020-03-18' }
];

const expectedTotalDeathsData = [
  { y: 111, x: '2020-03-16' },
  { y: 112, x: '2020-03-17' },
  { y: 113, x: '2020-03-18' }
];

const expectedRecoveredasesData = [
  { y: 53, x: '2020-03-16' },
  { y: 52, x: '2020-03-17' },
  { y: 51, x: '2020-03-18' }
];

describe('mapDataToTotalCases', () => {
  describe('when API data in', () => {
    test('should return array of chart values', () => {
      expect(mapDataToTotalCases(APIData)).toEqual(expectedTotalCasesData);
    });
  });
});

describe('mapDataToNewCases', () => {
  describe('when API data in', () => {
    test('should return array of chart values', () => {
      expect(mapDataToNewCases(APIData)).toEqual(expectedNewCasesData);
    });
  });
});

describe('mapDataToTotalDeaths', () => {
  describe('when API data in', () => {
    test('should return array of chart values', () => {
      expect(mapDataToTotalDeaths(APIData)).toEqual(expectedTotalCasesData);
    });
  });
});

describe('mapDataToTotalRecoveredCases', () => {
  describe('when API data in', () => {
    test('should return array of chart values', () => {
      expect(mapDataToTotalRecoveredCases(APIData)).toEqual(
        expectedTotalCasesData
      );
    });
  });
});
