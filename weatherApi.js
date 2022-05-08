import 'dotenv/config';
import axios from 'axios';
const weatherApiKey = process.env.WEATHER_API_KEY;

export const weatherApi = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json',
    params:{
        key:weatherApiKey,
        aqi: 'no',
    },
    timeout: 1000,
  });