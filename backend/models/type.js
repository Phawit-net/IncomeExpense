module.exports = (sequelize, DataTypes) => {
    const type = sequelize.define('type', {
        name: {
            type: DataTypes.STRING(10)
        }
    })
    type.associate = function (models) {
        type.hasMany(models.category, { foreignKey: 'type_id' })
    };

    return type
}

