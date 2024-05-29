const express = require('express')
const router = express.Router()
const path = require('path')

router.use((req, res, next) => {
    console.log('time: ', Date.now())
    next()
})
router.get('/', (req, res) => {
    console.log('in student route')
    res.json( {user: req.user, Student: req.user.username})
})
router.get('/registration', (req, res) => {
    let file = path.join(__dirname, 'data', 'myData.txt')
    console.log(file)
    res.sendfile(file)
})
module.exports = router