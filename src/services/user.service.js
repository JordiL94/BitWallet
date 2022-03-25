'use strict';

import { utils } from './utils.service.js';

export default {
    getUser,
    signup,
    addMove,
    logout
}

const KEY = 'user';
// const SESSION_KEY = 'user';

function getUser() {
    const user = utils.loadFromStorage(KEY);
    return Promise.resolve(user);
}

function signup(name) {
    const user = {
        id: utils.getRandomId(),
        name,
        coins: 100,
        moves: _addMoves()
    };

    utils.storeToStorage(KEY, user);
    return Promise.resolve(user);
}

async function addMove(contact, amount) {
    const user = await getUser();
    if (user.coins < amount) return Promise.reject('Insufficient funds');
    user.coins -= amount;

    const move = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    };
    user.moves.push(move);

    utils.storeToStorage(KEY, user);
    return Promise.resolve(user);
}

function logout() {
    utils.storeToStorage(KEY, null);
}

function _addMoves() {
    const moves = [
        {
            toId: 'd99e3u2ih329',
            to: 'Nora Channer',
            at: new Date(2652712571),
            amount: 0.17
        },
        {
            toId: '09tegu6i83yd',
            to: 'Tabby Slayny',
            at: new Date(2652712471),
            amount: 1
        },
        {
            toId: 'a39x7zzi2121',
            to: 'Margarette Ballefant',
            at: new Date(2652712371),
            amount: 2.06
        },
        {
            toId: 'd99e3u2ih329',
            to: 'Nora Channer',
            at: new Date(2652712271),
            amount: 0.89
        },
        {
            toId: 'd99e3u2ih329',
            to: 'Nora Channer',
            at: new Date(2652712171),
            amount: 0.03
        },
    ];

    return moves;
}

// async function login(username, password) {
//     let users = await DbService.query(KEY);
//     if (!users || !users.length) {
//         users = _createDefaultUsers();
//         await DbService.insert(KEY, users);
//     }

//     const idx = users.findIndex(currUser => currUser.username === username);
//     if (idx === -1 || users[idx].password !== password) return Promise.reject('Incorrect username or password');
//     else {
//         sessionStorage.setItem(SESSION_KEY, JSON.stringify(users[idx]));
//         return Promise.resolve(users[idx]);
//     };
// }

// function logout() {
//     sessionStorage.clear();
// }

// function _createDefaultUsers() {
//     return [{
//         username: "lara1",
//         password: "123456",
//         name: "Lara Fernandes",
//         coins: 0.67,
//         moves: []
//     }, {
//         username: "titog1",
//         password: "fgQJweYB53n",
//         name: "Tito Greenier",
//         coins: 0.17,
//         moves: []
//     }, {
//         username: "janis26",
//         password: "mwZln9fHJ",
//         name: "Janis Curteis",
//         coins: 0.32,
//         moves: []
//     }, {
//         username: "jarda66",
//         password: "80Uhzpp5JX",
//         name: "Jard Adnams",
//         coins: 2.17,
//         moves: []
//     }, {
//         username: "lanie4",
//         password: "0eFNYNkEsEK",
//         name: "Lanie Carman",
//         coins: 0.86,
//         moves: []
//     }]
// }