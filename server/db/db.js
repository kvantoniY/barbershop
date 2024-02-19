const Sequelize = require('sequelize')

module.exports = new Sequelize(
    "barber-db",
    "root",
    "",
    {
        dialect: 'mysql',
        host: "localhost",
        port: "3306"
    }
)
