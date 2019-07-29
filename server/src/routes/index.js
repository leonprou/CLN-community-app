var router = require('express').Router()

router.use('/api/v1', require('./api'))

router.get('/is_running', (req, res, next) => {
  res.send({ response: 'ok' })
})

router.get('/codefresh', (req, res, next) => {
  res.send({ response: 'codefresh' })
})

module.exports = router
