module.exports = (sequelize, DataTypes) => {
    const account = sequelize.define('account', {
        name:{
            type: DataTypes.STRING(50)
        }
    })
    account.associate = function (models) {
        account.hasMany(models.order, { foreignKey: 'account_id' })
    };
    return account
}
