const rp = require('request-promise')

const api = {
    _baseUrl() {
        return `${this.protocol}://${this.host}:${this.port}/api`
    },

    _call(method, path, body, qs) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            qs,
            json: true
        })
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

    login(username, password) {
        return this._call('post', 'login', { username, password })
    },

    list() {
        return this._call('get', 'user')
    },

    areas() {
        return this._call('get', 'area')
    },

    users(area, name, surname) {
        return this._call('get', 'users', undefined, { area, name, surname })
    },

    listUser(token) {
        return this._call('get', 'user', undefined, token)
    },

    centres() {
        return this._call('get', 'centres')
    },

    getCentre(_id) {
        return this._call('get', 'centre', undefined, { _id })
    },

    getUnitat(_id) {
        return this._call('get', 'unitat', undefined, { _id })
    },

    updateUser(id, password) {
        return this._call('put', 'updateuser', { id, password })
    },

    stock(id, description) {
        return this._call('get', 'stock', undefined, { id, description })
    }
}

module.exports = api