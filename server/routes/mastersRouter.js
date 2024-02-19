const Router = require('express')
const mastersController = require('../conrollers/mastersController')
const router = new Router()

router.get('/', mastersController.getMasters)
router.post('/', mastersController.create)
router.post('/edit', mastersController.editMasters)
router.post('/delete', mastersController.deleteMasters)

module.exports = router