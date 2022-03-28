'use strict';

import axios from "axios";
import { DbService } from './db-service.js';
import { utils } from './utils.service.js';


export default {
    getRate,
    getMarketPrice
}

const BITCOIN_STORAGE_KEY = 'bitcoin';

async function getRate(coins) {
    try {
        const res = await fetch('https://blockchain.info/tobtc?currency=USD&value=' + coins);
        const data = res.json();
        return data;
    } catch (err) {
        console.log('Encountered error:', err);
    }
}


async function getMarketPrice() {
    // const valuesFromStorage = await DbService.get(BITCOIN_STORAGE_KEY);
    // console.log('bitcoin.service.js 💤 28: ', valuesFromStorage);
    // if(valuesFromStorage) return valuesFromStorage;
    try {
        const res = await axios.get(
            "https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true"
        );
        let { values } = res.data;
        // utils.storeToStorage(BITCOIN_STORAGE_KEY, values);
        return values;
    } catch (err) {
        console.log('Encountered error:', err);
    }
}