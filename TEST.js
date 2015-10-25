$(document).ready(function(){
	function userData(location) {
   		var input = location;
 
    
    	var users = {
    		user1 : 
    		{
        		fullName: "Pepito al Calambres",
    	    	age: 17,
    		    url: "http://pepealcalambr.es",
    		    profile_pic: "http://i.imgur.com/22MFTwb.png",
    	    	particiation: 8
	    	},
	    	user2 : {
    	 		fullName: "Ruska Yarikitic",
     			age: 11,
     			url: "http://ryarikitic.ru",
     			profile_pic: "http://i.imgur.com/MjNDfcF.png",
        		particiation: 3
  				},
    		user3 : {
        		fullName: "Wealll Ovesam",
        		age: 34,
        		url: "http://w.ovesam.com",
        		profile_pic: "http://i.imgur.com/b39Xmjy.png",
        		particiation: 68
    		}
		}

    return users;  
}
	$('.submit').click(function(){
		$.getJSON( userData($(".input").val()), function( data ) {
			console.log(data);

			var arrayLength = (data.user).length;
			var i = 0;
			for (i =0; i < arrayLength; i++) {
				console.log(data.user[i].fullName);
				$( "body" ).append( "<p>" + data.user[i].fullName + "</p>" );
			}
		});
	});
});