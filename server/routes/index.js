const Router = require('express')
const router = new Router()

const adminRouter = require('./adminRouter')
const mastersRouter = require('./mastersRouter')
const servicesRouter = require('./servicesRouter')

router.use('/admin', adminRouter)
router.use('/masters', mastersRouter)
router.use('/services', servicesRouter)

module.exports = router