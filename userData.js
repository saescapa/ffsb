// var users = {

// 	user: ''
// 	fullName: ''
// 	age:
// 	url: ''
// 	profile_pic: ''
// 	participation:
// }

// function showData() {
// 	for 
// }
var users = {
    user : [
    {
        fullName: "Pepito al Calambres",
        age: 17,
        url: "http://pepealcalambr.es",
        profile_pic: "http://i.imgur.com/22MFTwb.png",
        particiation: 8
    },
    {
        fullName: "Ruska Yarikitic",
        age: 11,
        url: "http://ryarikitic.ru",
        profile_pic: "http://i.imgur.com/MjNDfcF.png",
        particiation: 3
    },
    {
        fullName: "Wealll Ovesam",
        age: 34,
        url: "http://w.ovesam.com",
        profile_pic: "http://i.imgur.com/b39Xmjy.png",
        particiation: 68
    }
    ]
}

$(document).ready(function(){
	function userData(users) {
		var users;
	for (i = 0; count = users.length, i < count, i++) {
		m = [
			fullName: "", age: , url: "", profile_pic: "", parti: ];
		}
	return user;
	}
}
	
$('.submit').click(function(){
	$.getJSON( userData($(".users").val()), function( data ) {
			console.log(data);

			// var arrayLength = (data.events).length;
			// var i = 0;
			// for (i =0; i < arrayLength; i++) {
			// 	console.log(data.events[i].name.text);
			// 	$( "body" ).append( "<p>" + data.events[i].name.text + "</p>" );
			// }
		});
	});
});

