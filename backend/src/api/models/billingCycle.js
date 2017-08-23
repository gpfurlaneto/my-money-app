module.exports = function(sequelize, DataTypes) {
    var BillingCycle = sequelize.define('BillingCycle', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })

    return BillingCycle
}