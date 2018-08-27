const Controller = require('../controllers/User/')
const {Router} = require('express')

const router = Router()

router.get('/users/', (req, res) => {
    res.write('receiving connection');
});

module.exports = router;