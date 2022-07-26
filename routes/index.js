const express = require('express')
const router = express.Router()

const admin = require('./modules/admin')
const users = require('./modules/users')

router.use('/api/admin', admin)
router.use('/api/users', users)

module.exports = router