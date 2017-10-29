let models = require('../models');

module.exports.getAll = (req, res) => {
    models.Department.findAll().then((result) => {
        res.send(result.map(dep => dep.dataValues))
    }).catch((err) => res.status(400).json(err.errors));
};

module.exports.getById = (req, res) => {
    models.Department.find({
        where: {
            id: req.params.id
        }
    }).then((result) => res.send(result.dataValues)
    ).catch((err) => res.status(400).json(err.errors));
};

module.exports.create = (req, res) => {
    models.Department.create({
        id: parseInt(req.body.id),
        name: req.body.name,
        location: req.body.location,
    }).then(() => res.status(200).send('department was created')
    ).catch((err) => res.status(400).json(err.errors));
};

module.exports.deleteById = (req, res) => {
    models.Department.destroy({
        where: {
            id: parseInt(req.params.id),
        },
    }).then(() => res.status(200).send('department was deleted')
    ).catch((err) => res.status(400).json(err.errors));
};

module.exports.update = (req, res) => {

    models.Department.find({
        where: {
            id: parseInt(req.body.id),
        },
    }).then((dep) => {
        let newDep = {};

        if (req.body.name)
            newDep.name = req.body.name;
        if (req.body.location)
            newDep.location = req.body.location;

        if (dep) {
            dep.update(newDep);
        }
    }).then(() => res.status(200).send('department was updated')
    ).catch((err) => res.status(400).json(err.errors));
};