'use strict';

var department; // not sure we will need this one
var name;
var lastName;
var emailAddress;
var comments;
var x = window.matchMedia("(max-width: 700px)");

function checkMobile(x){
    if(x.matches) {
        $('#footer-body').remove();
        $("#footer-row").prepend("<div id= 'footer-body' class= 'col-sm-12'>");
        $('#footer-body').append("<p class = 'pFooter'> TIAG® is a woman-owned business. DUNS: 065245750. </p>",
                                "<p class = 'pFooter'> Corporate Headquarters: (703) 437-7878 Ext. 11911 </p>",
                                "<p class = 'pFooter'> Freedom Drive, Suite 1180, Reston, VA 20190 </p>",
                                "<br>",
                                "<p class = 'pFooter'> This website is Copyright © 2019 </p>",
                                "<p class = 'pFooter'> The Informatics Applications Group, Inc. </p>");
        
    
    }
    //else {
    //     $('#footer-row').empty();
    //     // adds first icon to the footer (left)
    //     var dl= $('#footer-row').append("<div class= 'col-2 col-sm-6'>")
    //     dl.append('<img class= "footerImage center-block" src= "Assets/Images/TIAGlogo.svg" alt= "TIAGlogo" style= "margin-top: 30px;">');

    //     // adds footer text to the footer (middle)
    //     var dm= $('#footer-row').append("<div class= 'col-8 col-sm-12'>");
    //     dm.append("<p class = 'pFooter'> TIAG® is a woman-owned business. DUNS: 065245750. </p>",
    //     "<p class = 'pFooter'> Corporate Headquarters: (703) 437-7878 Ext. 11911 </p>",
    //     "<p class = 'pFooter'> Freedom Drive, Suite 1180, Reston, VA 20190 </p>",
    //     "<br>",
    //     "<p class = 'pFooter'> This website is Copyright © 2019 </p>",
    //     "<p class = 'pFooter'> The Informatics Applications Group, Inc. </p>");
        
    //     // adds icons to the footer (right)
    //     var dr= $('#footer-row').append("<div class= 'col-2 col-sm-6'>");
    //     dr.append('<img class= "footerImage" src= "Assets/Images/mresilience_sm_blue.svg" alt= "mresilience_sm_blue" style= "margin-top: 20px;">',
    //     '<img class= "footerImage" src= "Assets/Images/Facebook.svg" alt="fbLogo">');
    // }
    
}

checkMobile(x); // call function at run time
x.addListener(checkMobile); // attatch listener function on state change



// function to gather the contact info
// function contact() {
//     name = $('#user-name').val().trim();
//     lastName = $('#user-last-name').val().trim();
//     emailAddress = $('#user-email').val().trim();
//     comments = $('#message').val().trim();
// }


// Email Validation

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

console.log(validEmail);
   // else, run the code below

    // code source can be found here: https://www.smtpjs.com/
// code with encryption available
if (validEmail === true){

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
        message => alert("Thank you for your interest, we will contact you shortly!")
    );
}else{
    prompt('Please provide valid email');
    contact();
}
});