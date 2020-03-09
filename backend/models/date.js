module.exports = (sequelize, DataTypes) => {
    let moment = require('moment');
    const date = sequelize.define('date', {
        published_date: {
            type: DataTypes.DATEONLY,
            // get: function() {
            //     return moment(this.getDataValue('DateTime')).format('MM.YYYY')
            //  }
        },
    })
    date.associate = function (models) {
        date.hasMany(models.order, { foreignKey: 'date_id' })
    };
    return date
}
