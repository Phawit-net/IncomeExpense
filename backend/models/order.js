module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('order', {
        description: {
            type: DataTypes.STRING(500)
        },
        amount: {
            type: DataTypes.DECIMAL
        },
        published_time:{
            type: DataTypes.TIME,
        }
    })
    order.associate = function (models) {
        order.belongsTo(models.account, { foreignKey: 'account_id'})
        order.belongsTo(models.category, { foreignKey: 'category_id'})
        order.belongsTo(models.date, { foreignKey: 'date_id'})
    };
    return order
}
