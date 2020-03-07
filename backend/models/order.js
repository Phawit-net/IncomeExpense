module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('order', {
        description: {
            type: DataTypes.STRING(500)
        },
        amount: {
            type: DataTypes.DECIMAL
        }
    })
    order.associate = function (models) {
        order.hasMany(models.date, { foreignKey: 'order_id' })
    };
    return order
}
