module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
        name: {
            type: DataTypes.STRING(50)
        }
    })
    category.associate = function (models) {
        category.hasMany(models.order, { foreignKey: 'category_id' })
        category.belongsTo(models.type, { foreignKey: 'type_id'})
    };
    return category
}

