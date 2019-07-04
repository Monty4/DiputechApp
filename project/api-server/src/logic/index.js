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

    // Users filtered by unit and/or name and/or surname
    listUsers(unitat, name, surname) {
        let filter = {}

        if (unitat) filter.unitat = new ObjectId(unitat)
        if(name) filter.name = { $regex: new RegExp(name, 'i')}
        if (surname) filter.surname = { $regex: new RegExp(surname, 'i')}

        return User.find(filter).sort({ name: 1 })
        .then(result =>{return result})
     },

    listUser(username,password) {
        let filter = {username,password}

        return User.find(filter)
    },

    listAreas() {
        return Area.find()
    },

    listUnitats() {
        return Unitat.find().sort({ title: 1 })
    },

    // New User
    newUser(name,surname,username,pasword,email,phone,mobile,unitat,centre,area) {

        // ph = parseInt(phone)
        // mo = parseInt(mobile)
        return User.create({ name, surname, username, pasword, email, phone, mobile, unitat, centre, area })
    },

    // Update User by ID
    updateUser(id,password) {
        console.log(id)
        console.log(password)

        return User.findByIdAndUpdate({ _id:id }, { $set:{ password } }) // Devuelve el id
    },

    // Get Center by ID
    getCentre(_id) {
        return Centre.findById({ _id }, { title: 1 })
    },

    // Get Unitat by ID
    getUnitat(_id) {
        return Unitat.findById({ _id }, { title: 1 })
    },

    // Get Area by ID
    getArea(_id) {
        return Area.findById({ _id }, { title: 1 })
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
            let d = new Date()
            let day = d.getDay()
            // Centre.findByIdAndUpdate({ _id: "5cfa536132a80d082cbd8edb" }, { $set: { updated: day}})
            console.log(day)
        })
    },

    // Remove Stock by Id
    removeStock(id) {
        return Stock.findByIdAndRemove({ _id: id })
    },

    // Get date of update by centre
    getDate(id){

        let filter = {}
        filter._id = new ObjectId(id)
  
        return Centre.find(filter)
    }
}

module.exports = logic