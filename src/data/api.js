require('dotenv').config();
import axios from 'axios';

const COUNTRY = 'Ecuador';
const HISTORY_ENDPOINT = '/coronavirus/cases_by_particular_country.php';

const getData = (endpoint, params = {}) =>
  axios({
    method: 'GET',
    url: process.env.API_URL + endpoint,
    params,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': process.env.RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.RAPIDAPI_KEY
    }
  });

export const getHistory = () =>
  getData(HISTORY_ENDPOINT, { country: COUNTRY })
    .then(mapHistoryData)
    .catch(error => console.error(error));

const mapHistoryData = ({ data: { stat_by_country: data } }) => data;
