const express = require('express');
const { addition } = require('./operation');
const router = express.Router();

router.get('/', (req, res, next) => {
    const result = addition(req.query.a, req.query.b);
    console.log(`Returning result | ${new Date().toLocaleTimeString()}`);
    res.send(`CI/CD Working ${result}`);
})

module.exports = router;