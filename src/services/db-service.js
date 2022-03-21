'use strict'

import { utils } from './utils.service.js';

export const DbService = {

}

const ID_FIELD = '_id';

function query(collectionName) {
    let collection = utils.loadFromStorage(collectionName);
    if(!collection) collection = [];
    return Promise.resolve(collection);
}

async function get(collectionName, id) {
    const collection = await query(collectionName);
    return collection.find(item => item[ID_FIELD] === id);
}

async function remove(collectionName, id) {
    const collection = await query(collectionName);
    const idx = collection.findIndex(item => item[ID_FIELD] === id);
    if(id === -1) throw new Error('Could not find item');
    collection.splice(idx, 1);

    utils.storeToStorage(collectionName, collection);
    return Promise.resolve();
}

async function post(collectionName, item) {
    const collection = await query(collectionName);
    item[ID_FIELD] = utils.getRandomId();
    collection.push(item);

    utils.storeToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function put(collectionName, item) {
    
}