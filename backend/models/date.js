module.exports = (sequelize, DataTypes) => {
    let moment = require('moment');
    const date = sequelize.define('date', {
        published_date: {
            type: DataTypes.DATEONLY,
            get: function() {
                return moment(this.getDataValue('published_date')).format('DD-MM-YYYY')
             },
            unique: true
        },
    })
    date.associate = function (models) {
        date.hasMany(models.order, { foreignKey: 'date_id' })
    };
    return date
}
