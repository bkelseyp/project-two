module.exports=function(sequelize,DataTypes){
    var user=sequelize.define("user",{
        firstName:{
            type:DataTypes.STRING,
            allownull:false,
            validate: {
                is: ["^[a-z]+$",'i']
            }
        },
        lastName:{
            type:DataTypes.STRING,
            allownull:false,
            validate:{
                is: ["^[a-z]+$",'i']  
            }
        },
        email:{
            type:DataTypes.STRING,
            allownull:false,
            isEmail: true, 
        }


       

    });
    user.associate=function(models){
        user.belongsTo(models.destination,{
          foreignKey:{
              allownull:false
          }  
        })
    }
    return user;
}