let models = require('../models');

module.exports.getAll = (req, res) => {
    models.Employer.findAll().then((result) => {
        res.send(result.map(emp => emp.dataValues));
    }).catch((err) => res.status(400).json(err.errors));
};

module.exports.getById = (req, res) => {
    models.Employer.find({
        where: {
            id: req.params.id
        }
    }).then((result) => res.send(result.dataValues)
    ).catch((err) => res.status(400).json(err.errors));
};

module.exports.create = (req, res) => {
    models.Employer.create({
        id: parseInt(req.body.id),
        name: req.body.name,
        job: req.body.job,
        salary: parseInt(req.body.salary),
        DepartmentId: parseInt(req.body.departmentId)
    }).then(() => res.status(200).send('employer was created')
    ).catch((err) => res.status(400).json(err.errors));
};

module.exports.deleteById = (req, res) => {
    models.Employer.destroy({
        where: {
            id: parseInt(req.params.id),
        },
    }).then(() => res.status(200).send('employer was deleted')
    ).catch((err) => res.status(400).json(err.errors));
};

module.exports.update = (req, res) => {

    models.Employer.find({
        where: {
            id: parseInt(req.body.id),
        },
    }).then((emp) => {
        let newEmp = {};

        if (req.body.name)
            newEmp.name = req.body.name;
        if (req.body.job)
            newEmp.job = req.body.job;
        if (req.body.salary)
            newEmp.salary = req.body.salary;
        if (req.body.departmentId)
            newEmp.DepartmentId = req.body.departmentId;

        if (emp) {
            emp.update(newEmp)
        }
    }).then(() => res.status(200).send('employer was updated')
    ).catch((err) => res.status(400).json(err.errors));
};