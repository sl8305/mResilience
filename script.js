'use strict';

var department; // not sure we will need this one
var name;
var lastName;
var emailAddress;
var comments;


// function to gather the contact info
function contact() {
    name = $('#user-name').val().trim();
    lastName = $('#user-last-name').val().trim();
    emailAddress = $('#user-email');
    comments = $('#message').val().trim;
}

// click event on submit button will get contact() to run
$('#send').on('click', function () {
    contact();
    console.log('name : ', name);
    console.log('last name : ', lastName);
    console.log('email : ', emailAddres);
    console.log('comments : ', comments);
});

// code source can be found here: https://www.smtpjs.com/
// code with encryption available
Email.send({
    Host : 'smtp.yourisp.com',  // for testing
    Username : "username",  // from user input, do we need it?
    Password : "password",  // probably not needed for our purpose
    To : 'marinocarranaa@hotmail.com',  // for testing
    From : "you@isp.com",   //user input
    Subject : "This is the subject",    // first words of comment or static?
    Body : "And this is the body"   // will come from comment form
}).then(
  message => alert(message)
);