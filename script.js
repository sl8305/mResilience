'use strict';

var department; // not sure we will need this one
var name;
var lastName;
var emailAddress;
var comments;
var x = window.matchMedia("(max-width: 700px)");

// footer icons
var icon1= '<img class= "footerImage center-block" src= "Assets/Images/TIAGlogo.svg" alt= "TIAGlogo" style= "margin-top: 30px;">';
var icon2= '<img class= "footerImage" src= "Assets/Images/mresilience_sm_blue.svg" alt= "mresilience_sm_blue" style= "margin-top: 20px;">';
var icon3= '<img class= "footerImage" src= "Assets/Images/Facebook.svg" alt="fbLogo">';

// footer text
var p1 = '<p class = "pFooter"> TIAG® is a woman-owned business. DUNS: 065245750.</p>';
var p2 = '<p class= "pFooter"> Corporate Headquarters: (703) 437-7878 Ext. 11911 </p>';
var p3 = '<p class= "pFooter"> Freedom Drive, Suite 1180, Reston, VA 20190 </p>'; 
var p4 = '<p class= "pFooter"> This website is Copyright © 2019 </p>';
var p5 = '<p class= "pFooter"> The Informatics Applications Group, Inc. </p>';

function checkMobile(x){
    if(x.matches) {
        $('#footer-row').empty();
        var mobileMiddle1 = $("<div id= 'footer-body' class= 'col-sm-12'>").appendTo('#footer-row');
            // adding Text
            $(p1).appendTo(mobileMiddle1);
            $(p2).appendTo(mobileMiddle1);
            $(p3).appendTo(mobileMiddle1);
            $('<br>').appendTo(mobileMiddle1);
            $(p4).appendTo(mobileMiddle1);
            $(p5).appendTo(mobileMiddle1);

        var mobileMiddle2 = $("<div style= 'width:100%' class= 'col-sm-12'>").appendTo('#footer-row');
            // adding icons
            $(icon1).appendTo(mobileMiddle2);
            $(icon2).appendTo(mobileMiddle2);
            $(icon3).appendTo(mobileMiddle2);    
    }
    else {
        $('#footer-row').empty();

         // adds first icon to the footer (left)
        var leftSide= $("<div class= 'col-2'>").appendTo('#footer-row');
        $(icon1).appendTo(leftSide);

         // adds footer text to the footer (middle)
        var middleSide= $("<div id= 'footer-body' class= 'col-8'>").appendTo('#footer-row');
        $(p1).appendTo(middleSide);
        $(p2).appendTo(middleSide);
        $(p3).appendTo(middleSide);
        $('<br>').appendTo(middleSide);
        $(p4).appendTo(middleSide);
        $(p5).appendTo(middleSide);
        
         // adds icons to the footer (right)
        var rightSide= $("<div class= 'col-2'>").appendTo('#footer-row');
        $(icon2).appendTo(rightSide);
        $(icon3).appendTo(rightSide);
    }
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
