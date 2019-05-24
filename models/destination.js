module.exports=function(sequelize,DataTypes){
    var destination=sequelize.define("destination",{
       cityName:{
           type:DataTypes.STRING,
           allowNull:false,
           validate:{
               len:[1,140]
           }
        },
           Distance:{
               type:DataTypes.INTEGER,
               allowNull:false,
               validate:{
                   len:[1,140]
               }
            },
               Date:{
                   type:DataTypes.DATE,
                   allowNull:false,
                   isDate: true,  
               },
               origin:{
                   type:DataTypes.STRING,
                   allowNull:false,
                   validate:{
                       len:[1,30]
                   }
                },
                   duration:{
                       type:DataTypes.DECIMAL,
                       allowNull:false,
                       isDecimal: true,
                   },
                   blurb:{
                       type:DataTypes.TEXT,
                       allowNull:false,
                   }
                },{
                    timestamps:false
                });

                    
  destination.associate = function(models) {
          destination.belongsTo(models.region,{
              foreignKey:{
                  allowNull:false
              }
          })
        
  
};
return destination;
}