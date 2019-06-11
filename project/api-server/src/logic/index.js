const { User, Centre, Area, Unitat, Stock } = require('../models')
const ObjectId = require('mongoose').Types.ObjectId
// const mongoose = require('mongoose')

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
    updateUser(_id,password) {
        // console.log(_id)
        // console.log(typeof(password))
        // console.log({password})
        return User.updateOne({_id}, {password}) // Devuelve el id
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
    
    listStock(centre, description) {
        let filter = {}
        filter.centre = new ObjectId(centre)
        if (description) filter.description = { $regex: new RegExp(description, 'i') }

        return Stock.find(filter)
    }
}

module.exports = logic 