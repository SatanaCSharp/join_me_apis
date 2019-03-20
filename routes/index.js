const express = require('express');
const router = express.Router();

router.use('/', require('./greetings'));
router.use('/auth', require('./auth'));
router.use('/events', require('./events'));
router.all('*', (req, res) => {
    res.status(404).send({msg: 'Not found'});
});
router.use(function (err, req, res) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({
            message: 'Invalid token'
        });
    }
});

module.exports = router;