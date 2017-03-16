 jQuery(document).ready(function($) {
     
     function ajaxFromLocalJson(locationToGrab){
     
            $.ajax({
                url : "weather.json", //fix this when you actually have a json file
            dataType : "json",
            success : function(data) {
            var location = data[locationToGrab]['City'];
            var temp_f = data[locationToGrab]['High'];
            console.log("Current temperature in " + location + " is: " + temp_f);
                
            var cur_location = $('#location');
            var temp = $('#temp');
            var message = $('#message');
                
            cur_location.text(location);
            temp.text(temp_f);
            message.text("Current temperature in " + location + " is: " + temp_f);
                
                
            }
            });
     }
         
          function ajaxFromApi() {

            $.ajax({
            url : "http://api.wunderground.com/api/3d771b03d1aed7e0/geolookup/conditions/q/ID/Rexburg.json",
            dataType : "jsonp",
            success : function(data) {
                console.log(data);
                var location = data["location"]['city'];
                var temp_f = data["current_observation"]['temp_f'];
                alert("Current temperature in " + location + " is: " + temp_f);
                
                var cur_location = $('#location');
            var temp = $('#temp');
            var message = $('#message');
                
            cur_location.text(location);
            temp.text(temp_f);
            message.text("Current temperature in " + location + " is: " + temp_f);
      
  }     
  });          
          }
          ajaxFromLocalJson("Franklin");
        ajaxFromApi("Rexburg");
     
    
     });
   