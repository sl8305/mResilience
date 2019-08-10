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
    emailAddress = $('#user-email').val().trim();
    comments = $('#message').val().trim();
}


// Email Validation

// var checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;  

// function validateEmail() { 
//   console.log(checkEmail)  
//   console.log(emailAddress)
//     // var email = $('#user-email').val().trim();
//  if (checkEmail!==emailAddress){
//      console.log("invalid")
//      return true;
//  }else{
//      console.log("valid")
//      return false;
//  }

//     //  email.focus;
// }; 

function validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailAddress).toLowerCase());
}




// click event on submit button will get contact() to run
$('#send').on('click', function (stop) {
    stop.preventDefault(); 
    contact(); 
   

var validEmail = validateEmail();
// if validEmail is true, alert to the user, enter in a valid email

console.log(validEmail)
   // else, run the code below
   

    // code source can be found here: https://www.smtpjs.com/
// code with encryption available
if (validEmail === false){

    alert('Please provide valid email');
    // contact();
};


// Email.send({
//     Host: 'smtp25.elasticemail.com',  // for testing
//     Username: 'marinocarranza@hotmail.com',  // from user input, do we need it?
//     Password: 'a5b01d0e-fdfe-4593-8205-cb8f0d332406',  // probably not needed for our purpose
//     To: 'marino.carranza@gmail.com',    // for testing
//     From: 'marinocarranza@hotmail.com',  //user input
//     Subject: 'from User',    // first words of comment or static?
//     Body: `${emailAddress} sent you a message and would love a reply
//                 Message: ${comments}`   // will come from comment form
// }).then(
//     message => alert(message)
// );


    
    // console.log('name : ', name);
    // console.log('last name : ', lastName);
    // console.log('email : ', emailAddress);
    // console.log('comments : ', comments);
});


