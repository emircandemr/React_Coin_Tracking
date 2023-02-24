import axios from 'axios';

export const baseHTTP = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
    params : {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        // page: 1,
        sparkline: false,
    }
});