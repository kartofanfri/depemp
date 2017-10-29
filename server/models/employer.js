module.exports = (sequelize, DataTypes) => {
    const Employer = sequelize.define('Employer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notEmpty: true,
        },
        name: {
            type: DataTypes.STRING,
            notEmpty: true,
        },
        job: {
            type: DataTypes.STRING,
            notEmpty: true,
        },
        salary: {
            type: DataTypes.INTEGER,
            notEmpty: true,
        },
        DepartmentId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
        }
    });

    return Employer;
};


