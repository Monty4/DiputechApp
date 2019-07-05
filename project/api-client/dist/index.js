'use strict';

var rp = require('request-promise');

var api = {
    _baseUrl: function _baseUrl() {
        return this.protocol + '://' + this.host + ':' + this.port + '/api';
    },
    _call: function _call(method, path, body, qs) {
        return rp({
            method: method,
            uri: this._baseUrl() + '/' + path,
            body: body,
            qs: qs,
            json: true
        });
    },


    // _call(method, path, body, token){
    //     const options = { 
    //         method,
    //         url: `${this._baseUrl()}/${path}`,
    //         json: true
    //     }

    //     if(body) options.body = body

    //     if (token) options.headers = { authorization: `Bearer ${token}` }

    //     return rp(options)
    // },

    login: function login(username, password) {
        return this._call('post', 'login', { username: username, password: password });
    },
    verify: function verify(username, password) {
        return this._call('post', 'verify', { username: username, password: password });
    },


    // Get All Users
    list: function list() {
        return this._call('get', 'user');
    },


    // Get All Areas
    areas: function areas() {
        return this._call('get', 'area');
    },


    // Get All Unitats
    unitats: function unitats() {
        return this._call('get', 'unitat');
    },


    // Get All Centres
    centres: function centres() {
        return this._call('get', 'centres');
    },
    users: function users(unitat, name, surname) {
        return this._call('get', 'users', undefined, { unitat: unitat, name: name, surname: surname });
    },
    listUser: function listUser(token) {
        return this._call('get', 'user', undefined, token);
    },
    getCentre: function getCentre(_id) {
        return this._call('get', 'centre', undefined, { _id: _id });
    },
    getUnitat: function getUnitat(_id) {
        return this._call('get', 'getunitat', undefined, { _id: _id });
    },


    // getArea(_id) {
    //     return this._call('get', 'area', undefined, { _id })
    // },

    newUser: function newUser(name, surname, username, pasword, email, phone, mobile, unitat, centre, area) {
        return this._call('get', 'newuser', undefined, { name: name, surname: surname, username: username, pasword: pasword, email: email, phone: phone, mobile: mobile, unitat: unitat, centre: centre, area: area });
    },
    updateUser: function updateUser(id, password) {
        return this._call('put', 'updateuser', { id: id, password: password });
    },
    stock: function stock(id, description) {
        return this._call('get', 'stock', undefined, { id: id, description: description });
    },
    newStock: function newStock(centre, title, qt) {
        return this._call('get', 'newstock', undefined, { centre: centre, title: title, qt: qt });
    },
    updateStock: function updateStock(id, title, qt) {
        return this._call('get', 'updatestock', undefined, { id: id, title: title, qt: qt });
    },
    removeStock: function removeStock(id) {
        return this._call('delete', 'removestock', undefined, { id: id });
    },
    getDate: function getDate(id) {
        return this._call('get', 'getdate', undefined, { id: id });
    }
};

module.exports = api;
