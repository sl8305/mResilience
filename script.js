'use strict';

var department; // not sure we will need this one
var name;
var lastName;
var emailAddress;
var comments;


// function to gather the contact info
// function contact() {
//     name = $('#user-name').val().trim();
//     lastName = $('#user-last-name').val().trim();
//     emailAddress = $('#user-email').val().trim();
//     comments = $('#message').val().trim();
// }

// // Spell Check API

// OkHttpClient client = new OkHttpClient();

// Request request = new Request.Builder()
// 	.url("https://montanaflynn-spellcheck.p.rapidapi.com/check/?text=This%20sentnce%20has%20some%20probblems.")
// 	.get()
// 	.addHeader("x-rapidapi-host", "montanaflynn-spellcheck.p.rapidapi.com")
// 	.addHeader("x-rapidapi-key", "f584d32ad1mshf0cebe5f7850049p16710bjsn468c2f3c3760")
// 	.build();

// Response response = client.newCall(request).execute();




// click event on submit button will get contact() to run
$('#send').on('click', function (stop) {
    stop.preventDefault(); 
    contact();

    // code source can be found here: https://www.smtpjs.com/
// code with encryption available
Email.send({
    Host: 'smtp25.elasticemail.com',  // for testing
    Username: 'marinocarranza@hotmail.com',  // from user input, do we need it?
    Password: 'a5b01d0e-fdfe-4593-8205-cb8f0d332406',  // probably not needed for our purpose
    To: 'marino.carranza@gmail.com',    // for testing
    From: 'marinocarranza@hotmail.com',  //user input
    Subject: 'from User',    // first words of comment or static?
    Body: `${emailAddress} sent you a message and would love a reply
                Message: ${comments}`   // will come from comment form
}).then(
    message => alert(message)
);


    
    // console.log('name : ', name);
    // console.log('last name : ', lastName);
    // console.log('email : ', emailAddress);
    // console.log('comments : ', comments);
});


