'use strict';
console.log('linked');

var email;

email = $('#user-email').val().trim();

var access_key = '7f95822a0882fc130f048a764288d1c1';
// var email_address = 'support@apilayer.com';

// verify email address via AJAX call
$.ajax({
    url: 'http://apilayer.net/api/check?access_key=' + access_key + '&email=' + email,   
    dataType: 'jsonp',
    success: function(json) {

    // Access and use your preferred validation result objects
    console.log(json.format_valid);
    console.log(json.smtp_check);
    console.log(json.score);
                
    }
});


// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://apilayer-mailboxlayer-v1.p.rapidapi.com/check?smtp=1&catch_all=0&&access_key=7f95822a0882fc130f048a764288d1c1",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "apilayer-mailboxlayer-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "ad24a6a3c4msh1ef81c2b087b181p14a38ejsn04757d489e51"
// 	}
// }
// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://apilayer-mailboxlayer-v1.p.rapidapi.com/check?smtp=1&catch_all=0&email=marino.carranza%40gmail.com&access_key=7f95822a0882fc130f048a764288d1c1",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "apilayer-mailboxlayer-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "ad24a6a3c4msh1ef81c2b087b181p14a38ejsn04757d489e51"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// console.log('verify --> ', settings);


// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://apilayer.net/api/check?access_key = 7f95822a0882fc130f048a764288d1c1",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "apilayer-mailboxlayer-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "7f95822a0882fc130f048a764288d1c1"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



// http://apilayer.net/api/check

//     ? access_key = 7f95822a0882fc130f048a764288d1c1
//     & email = marinocarranza@hotmail.com
//     & smtp = 1
//     & format = 1