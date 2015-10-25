// function changeLocation(input) {
//     var input = prompt("What is your location?");
    
//     var n = input.search(" ");
//     while (n != -1) {
//         input = input.replace(" ", "+");
//     }
    
//     var url = "https://www.eventbriteapi.com/v3/events/search/?q=hackathon&location.address=[[LOCATION]]]&token=Z5PXVRGA7UEWODDNJFXR";
//     	url = url.replace("[[LOCATION]]]", input);
//     	alert(url);   
// }

// changeLocation();


$(document).ready(function(){
	function changeLocation(location) {
   		var input = location.replace(/\s/g,"+");
    
    // var n = input.search(" ");
    // while (n != -1) {
    //     input = input.replace(" ", "+");
    // }
    
       var url = "https://www.eventbriteapi.com/v3/events/search/?q=hackathon&location.address=" + input + "&token=Z5PXVRGA7UEWODDNJFXR";

    	//url = url.replace("[[LOCATION]]]", input);
    return url;  
}
	$('.submit').click(function(){
		$.getJSON( changeLocation($(".input").val()), function( data ) {
			console.log(data);

			var arrayLength = (data.events).length;
			var i = 0;
			for (i =0; i < arrayLength; i++) {
				console.log(data.events[i].name.text);
				$( "body" ).append( "<p>" + data.events[i].name.text + "</p>" );
			}
		});
	});
});