module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notEmpty: true,
        },
        name: {
            type: DataTypes.STRING,
            notEmpty: true,
        },
        location: {
            type: DataTypes.STRING,
            notEmpty: true,
        }
    });

    Department.associate = (models) =>
        Department.hasMany(models.Employer);


    return Department;
};


