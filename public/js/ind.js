var $cityText=$("#city-text");
function myFunction(){
    var id= document.getElementById("dp").value;
    $.ajax({
     method: "GET",
     url: "/destination/" + id
   }).then(result);
   var str="";
   for(var i=0;i<result.length;i++){
     str+="<option value='"+result[i].id+"'>"+result[i].cityName+"</option>";
   }
   $("#dp1").append(str);
  
 }