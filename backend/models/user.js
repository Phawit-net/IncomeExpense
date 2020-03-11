module.exports = (sequelize,DataType)=>{
    const user = sequelize.define('user',{
        username : {
            type : DataType.STRING(255)
        },
        password :{
            type : DataType.STRING(255)
        },
        email :{
            type : DataType.STRING(100)
        },
        avatar :{
            type : DataType.STRING(100)
        },
        role :{
            type : DataType.ENUM("admin","user")
        }
    })
    user.associate =(models) =>{
        user.hasMany(models.order,{foreignKey : 'user_id'})
    }

    return user 
}
