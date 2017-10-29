let express = require('express');
let router = express.Router();
let employeesMiddleware = require('../middleware/employer');


router.get('/', employeesMiddleware.getAll);

router.get('/:id', employeesMiddleware.getById);

router.post('/create', employeesMiddleware.create);

router.delete('/delete/:id', employeesMiddleware.deleteById);

router.put('/update', employeesMiddleware.update);


module.exports = router;
