const {Model , DataTypes} = require('sequelize');

class Profile extends Model {
    static init(sequelize){
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING,
                status: DataTypes.STRING,
            },
            {
                sequelize,
            }
        );
    }
    static associate(models){
        this.hasMany(models.User,{foreignKey:'profileId',as: 'user'});
    }
}

module.exports = Profile;