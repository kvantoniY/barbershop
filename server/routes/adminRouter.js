const Router = require('express')
const adminController = require('../conrollers/adminController')
const router = new Router()

router.post('/registration', adminController.registration)
router.post('/login', adminController.login)

module.exports = router