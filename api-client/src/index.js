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
        return this._call('post', 'login', { username, password})
    },

    list() {
        return this._call('get', 'user')
    },

    areas() {
        return this._call('get', 'area')
    },

    users(name, surname) {
        return this._call('get', 'users', undefined, { name, surname })
    },

    // user(username,password) {
    //     return this._call('post', 'user', { username, password })
    // },

    listUser(token) {
        return this._call('get', 'user', undefined, token)
    }
}

module.exports = api