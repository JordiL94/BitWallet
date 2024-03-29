'use strict';

import { DbService } from './db-service.js';

const KEY = 'contacts';

export default {
    query,
    get,
    remove,
    save,
    getEmptyContact
};

async function query() {
    let contacts = await DbService.query(KEY);
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts();
        await DbService.insert(KEY, contacts);
    }

    return contacts;
}

async function get(id) {
    const contact = await DbService.get(KEY, id);
    if(!contact) throw new Error('Unknown contact');

    return contact;
}

function remove(id) {
    return DbService.remove(KEY, id);
}

function save(contact) {
    if(contact._id) return DbService.put(KEY, contact);
    return DbService.post(KEY, contact);
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    };
}

function _createDefaultContacts() {
    return [{
        _id: 'd99e3u2ih329',
        name: "Nora Channer",
        email: "nchanner0@myspace.com",
        phone: "+1 (531) 904-7601"
    }, {
        _id: '09tegu6i83yd',
        name: "Tabby Slayny",
        email: "tslayny1@ucoz.com",
        phone: "+63 (858) 652-0461"
    }, {
        _id: 'a39x7zzi2121',
        name: "Margarette Ballefant",
        email: "mballefant2@imgur.com",
        phone: "+86 (608) 819-8196"
    }, {
        _id: 'sm9n3v21h225',
        name: "Ursola Clawsley",
        email: "uclawsley3@archive.org",
        phone: "+55 (676) 260-8427"
    }, {
        _id: 'it993625hn2b',
        name: "Innis Snaden",
        email: "isnaden4@devhub.com",
        phone: "+386 (522) 689-2908"
    }]
}