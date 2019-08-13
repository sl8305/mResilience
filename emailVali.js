'use strict'; 
console.log('it works')

function reportResult(data) {
 // You may wish to utilise additional fields here
var status = data['deliverable'].toLowerCase(); // get 'deliverable' from REST response
var additionalStatus = data['hostExists']; // get 'hostExists' from REST response
var message = data['Message']; // Is the mailbox full
console.log(status);
console.log(additionalStatus);
console.log(message);
var statusHtml;
// if there is an error message, show here
if (message != null
        && message != '') {
        statusHtml = "<span class='errorMsg'>Error. Message='" + message + "' .</span>";
} else {
        // map REST response data to presentation messages.
        switch (status) {
                case 'ok':
                        statusHtml = "<span class='statusOk'>Email address is ok.</span>";
                        break;
                case 'bad':
                        statusHtml = "<span class='statusBad'>Email address is not valid.</span>";
                        break;
                default:
                        statusHtml = "<span class='statusUnknown'>Unable to validate email. Reason=" + additionalStatus + "</span>";
                        break;
        }
}
console.log(statusHtml);
// present the result on screen
$('#validationResult').html(statusHtml);
}


