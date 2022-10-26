const express = require('express');
const { addition } = require('./operation');
const router = express.Router();

router.get('/', (req, res, next) => {
    const result = addition(req.query.a, req.query.b);
    res.send(`Working ${result}`);
})

module.exports = router;