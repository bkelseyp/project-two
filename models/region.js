module.exports=function(sequelize,DataTypes){
   var region=sequelize.define("region",{
      regionName:{
          type:DataTypes.STRING,
          allowNull:false,
          validate:{
              len:[1,140]
          }
      }
    },{

    timestamps:false
       
   });
   region.associate = function(models) {
    // Associating region with Destination
    // When a region is deleted, also delete any associated citie's
    region.hasMany(models.destination, {
      onDelete: "cascade"
    });
  };
  return region;
}
