import { curry, compose } from 'ramda';

const DATE_LABEL = 'record_date';
const TOTAL_CASES_LABEL = 'total_cases';
const NEW_CASES_LABEL = 'new_cases';
const TOTAL_DEATHS_LABEL = 'total_deaths';
const RECOVERED_CASES_LABEL = 'total_recovered';

const mapToBarChart = array =>
  array.map(([xValue, yValue]) => ({
    x: xValue,
    y: yValue
  }));

const parseCaseNumber = input => parseInt(input.replace(',', '')) || 0;

const getDate = dateString => dateString.split(' ')[0];

const filterChartValues = (array, filterFn) =>
  Array.from(
    array.reduce((map, entry) => (map.set(...filterFn(entry)), map), new Map())
  );

const getChartParamValues = curry((yAxis, obj) => [
  getDate(obj[DATE_LABEL]),
  parseCaseNumber(obj[yAxis])
]);

export const mapDataToTotalCases = data =>
  compose(mapToBarChart, filterChartValues)(
    data,
    getChartParamValues(TOTAL_CASES_LABEL)
  );

export const mapDataToNewCases = data =>
  compose(mapToBarChart, filterChartValues)(
    data,
    getChartParamValues(NEW_CASES_LABEL)
  );

export const mapDataToTotalDeaths = data =>
  compose(mapToBarChart, filterChartValues)(
    data,
    getChartParamValues(TOTAL_DEATHS_LABEL)
  );

export const mapDataToTotalRecoveredCases = data =>
  compose(mapToBarChart, filterChartValues)(
    data,
    getChartParamValues(RECOVERED_CASES_LABEL)
  );
