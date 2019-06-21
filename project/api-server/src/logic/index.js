const { User, Centre, Area, Unitat, Stock } = require('../models')
const ObjectId = require('mongoose').Types.ObjectId
const mongoose = require('mongoose')

const logic = {
    // User Login
    verify(username, password) {
        return Promise.resolve()
            .then(() => {
                return User.findOne({ username, password }, { _id: 1, username: 1 })
            })
            .then(user => {
                if(!user) throw Error('username and/or password wrong')
                return user
            })
    },

    // Users filtered by name and/or surname
    listUsers(area, name, surname) {
        let filter = {}

        if (area) filter.area = new ObjectId(area)
        if(name) filter.name = { $regex: new RegExp(name, 'i')}
        if (surname) filter.surname = { $regex: new RegExp(surname, 'i')}

        return User.find(filter).then(result =>{return result})
     },

    listUser(username,password) {
        let filter = {username,password}

        return User.find(filter)
    },

    listAreas() {
        return Area.find()
    },

    // Update User by ID
    updateUser(id,password) {
        console.log(id)
        console.log(password)

        return User.findByIdAndUpdate({ _id:id }, { $set:{ password } }) // Devuelve el id
        // return User.updateOne({_id}, {password}).then(()=>password) // Devuelve el password
        // return User.findById({_id},{name:1, username: 1, password: 1})
        // return User.findOneAndUpdate({id:1}, {$set:{password}})
    },

    // Get Center by ID
    getCentre(_id) {
        return Centre.findById({ _id }, { title: 1 })
    },

    // Get Unitat by ID
    getUnitat(_id) {
        return Unitat.findById({ _id }, { title: 1 })
    },

    listCentres() {
        return Centre.find()
    },

    // Get Stock by Centre [and Description] ordered by Description ASC
    listStock(centre, title) {

        let filter = {}
        filter.centre = new ObjectId(centre)
        if (title) filter.title = { $regex: new RegExp(title, 'i') }

        return Stock.find(filter).sort({ title: 1 })
    },

    // New Stock Item
    newStock(centre, title, qt) {
        return Stock.create({ centre, title, qt })
    },

    // Update Stock title and quantity
    updateStock(id, title, qt) {

        q = parseInt(qt)

        return Stock.findByIdAndUpdate({ _id:id }, { $set:{ title,qt:q } }, function(err,doc){
            if(err){ console.log("Something wrong when updating data! "+err) }
            console.log(doc)
        })
    },

    // Remove Stock by Id
    removeStock(id) {
        return Stock.findByIdAndRemove({ _id: id })
    }
}

module.exports = logic