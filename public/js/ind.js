$(document).ready(function(){
    document.getElementById("dp").onchange = function() {
        var id = document.getElementById("dp").value;
        $.ajax({
            method: "GET",
            url: "/api/destination/" + id
        }).then(function (result) {
            var str = "";
            console.log(result)
            for (var i = 0; i < result.length; i++) {
                str += "<option value='" + result[i].id + "'>" + result[i].cityName + "</option>";
            }
            
            $("#dp1").empty();
            $("#dp1").append(str);
        })
    }
})
