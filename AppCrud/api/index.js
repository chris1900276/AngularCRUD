const router = require('express').Router();

    connection = require('./Connection');

router.use('/connection', connection);

router.get('/', function (req, res) {
    res.status(200).json({ message: 'API connected' })
});


module.exports = router;

