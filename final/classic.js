console.log("f")
$(function(){
$.getJSON( "classic.json", function( data ) {
    console.log("test");
    console.log(data);
  var items = [];
  $.each( data, function( key, val ) {
      console.log("Hello")
     items.push( "<li><a href='" + val["link"] + "'><img src='" + val["imgSrc"] +  "' srcset = '"+val["srcset"] + "' class='comfy'/></a></li>" );
      
  });
 
  $( "<ul/>", {
    "id": "example",
    html: items.join( "" )
  }).appendTo( "main" );
});
});