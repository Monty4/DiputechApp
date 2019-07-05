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

    verify(username, password) {
        return this._call('post', 'verify', { username, password})
    },

    // Get All Users
    list() {
        return this._call('get', 'user')
    },

    // Get All Areas
    areas() {
        return this._call('get', 'area')
    },
    
    // Get All Unitats
    unitats() {
        return this._call('get', 'unitat')
    },

    // Get All Centres
    centres() {
        return this._call('get', 'centres')
    },

    users(unitat, name, surname) {
         return this._call('get', 'users', undefined, { unitat, name, surname })
    },

    listUser(token) {
        return this._call('get', 'user', undefined, token)
    },

    getCentre(_id) {
        return this._call('get', 'centre', undefined, { _id })
    },

    getUnitat(_id) {
           return this._call('get', 'getunitat', undefined, { _id })
    },

    // getArea(_id) {
    //     return this._call('get', 'area', undefined, { _id })
    // },

    newUser(name,surname,username,pasword,email,phone,mobile,unitat,centre,area) {
        return this._call('get', 'newuser', undefined, { name,surname,username,pasword,email,phone,mobile,unitat,centre,area })
    },

    updateUser(id, password) {
        return this._call('put', 'updateuser', { id, password })
    },

    stock(id, description) {
        return this._call('get', 'stock', undefined, { id, description })
    },
    newStock(centre,title,qt) {
        return this._call('get', 'newstock', undefined, { centre, title, qt })
    },

    updateStock(id,title,qt) {
        return this._call('get', 'updatestock', undefined, { id, title, qt })
    },

    removeStock(id) {
        return this._call('delete', 'removestock', undefined, { id })
    },

    getDate(id) {
        return this._call('get', 'getdate', undefined, { id })
    }
}

module.exports = api