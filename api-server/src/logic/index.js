 const { Area, User } = require('../models')
//  const ObjectId = require('mongoose').Types.ObjectId
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

    // Users filtered by name and surname
    listUsers(name,surname) {
         let filter = {}

         if(name) filter.name = { $regex: new RegExp(name, 'i')}
         if (surname) filter.surname = { $regex: new RegExp(surname, 'i')}

         return User.find(filter).then(result =>{return result})
     },

    // User by username and password
    // listUser(username, password) {
    //     return User.findOne( { username: username }, { _id:1 } ).then(result => { return result })
    // },

    listUser(username,password) {
        let filter = {username,password}

        return User.find(filter)
    },

    listAreas() {
         return Area.find()
    },

    //  list(name, surname) {
    //      let filter = {}
    //     //  if (area) filter.areas = new ObjectId(area)
    //      if (name) filter.name = { $regex: new RegExp(name, 'i')}
    //      if (surname) filter.surname = { $regex: new RegExp(surname, 'i')}

    //      return User.find(filter).then(result => {
    //          return result
    //      })
    //  }
 }

 module.exports = logic 