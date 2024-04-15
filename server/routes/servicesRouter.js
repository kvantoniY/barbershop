const Router = require('express')
const servicesController = require('../conrollers/servicesController')
const router = new Router()

router.get('/', servicesController.getServices)
router.post('/', servicesController.editServices)
router.post('/delete', servicesController.deleteServices)
router.post('/add', servicesController.addServices)

module.exports = router