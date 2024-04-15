
const { DataTypes } = require('sequelize')
const sequelize = require('./db')


const Services = sequelize.define('services', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    price: {type: DataTypes.STRING},
    price_medium: {type: DataTypes.STRING},
    price_high: {type: DataTypes.STRING},
    time: {type: DataTypes.STRING}
},
 {
    tableName: 'services'
})

const Admins = sequelize.define('admins', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
},
 {
    tableName: 'admins'
})

const Masters = sequelize.define('masters', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    second_name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING, defaultValue: "default.jpg",},
},
 {
    tableName: 'masters'
})

const Description = sequelize.define('description', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tel: {type: DataTypes.STRING},
    about: {type: DataTypes.STRING},
},
 {
    tableName: 'description'
})

module.exports = {
    Admins,
    Services,
    Masters,
    Description
}