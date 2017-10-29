let express = require('express');
let router = express.Router();
let departmentsMiddleware = require('../middleware/departments');


router.get('/', departmentsMiddleware.getAll);

router.get('/:id', departmentsMiddleware.getById);

router.post('/create', departmentsMiddleware.create);

router.delete('/delete/:id', departmentsMiddleware.deleteById);

router.put('/update', departmentsMiddleware.update);

module.exports = router;
