const express = require('express')

const Router = express.Router()

Router.get('/info', (req, res) => {
  console.log('incoming trafic')
  return res.json({ code: 1 })
})

module.exports = Router
