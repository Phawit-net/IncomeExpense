module.exports = (sequelize, DataTypes) => {
    const date = sequelize.define('date', {
        published_date: {
            type: DataTypes.DATEONLY
        },
    })
    return date
}
