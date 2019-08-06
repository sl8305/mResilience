<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
            <meta charset="utf-8" />
            <title>emailchecker.com : License Key Sample.</title>
            <style type="text/css">
                    .statusUnknown {
                            color: #c1c72c;
                    }
                    .statusOk {
                            color: #009933;
                    }
                    .statusBad, .errorMsg {
                            color: #ff0000;
                    }
                    input[type='text'] {
                            width: 300px;
                    }
                    p label {
                            display: inline-block; width: 60px;
                    }
            </style>
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    </head>
    <body>
            <h1>emailchecker.com : email verification demo using simple key authentication with jQuery.</h1>
            <h2>About</h2>
            <p>This example shows how to perform email verification using just client side scripting and invoking a simple key based RESTful endpoint at <a href="https://api.emailverifyapi.com" target="_blank">api.emailverifyapi.com</a>.</p>
            <h2>How to run this sample</h2>
            <p>This page can be hosted anywhere (i.e. any web host or platform). The only thing needed is a valid license key.</p>
            <h2>Key features</h2>
            <ul>
                    <li>Compatible with all modern browsers</li>
                    <li>Uses jQuery 1.11.1</li>
                    <li>No server side scripting required</li>
            </ul>
            <hr />
            <h2>Try it</h2>
            <p>
                    <label for="key">Key:</label>
                    <input type="text" id="key" name="key" tabindex="1" maxlength="20" />
            </p>
            <p>
                    <label for="email">Email:</label>
                    <input type="text" name="email" id="email" tabindex="2" />
                    <input type="button" name="submit" id="submit" tabindex="3" value="verify" />
            </p>
            <div id="validationResult"></div> <!--Result output here-->
            <script>
                            /*nest key logic inside document.ready to ensure functionality only available once document has fully loaded in browser.*/
                            $(function () {
                                    console.log("ready!");
                                    $('#submit').click(function () {
                                            var emailText = $('#email').val(); // get key from text box entry
                                            var keyText = $('#key').val(); // get email address to be checked from text box
                                            if (keyText.length == 0) {
                                                    $('#validationResult').html("<span class='errorMsg'>Please enter key.</span>");
                                                    return;
                                            }
                                            if (emailText.length == 0) {
                                                    $('#validationResult').html("<span class='errorMsg'>Please enter something for email.</span>");
                                                    return;
                                            }
                                            $('#validationResult').html("verifying...");
                                            var emailVerifyApi = 'https://api.emailverifyapi.com/v3/lookups/json?email=' + encodeURIComponent(emailText) + '&key=' + keyText;
                                            /*execute remote request to perform email verification. Any errors will appear in the developer console (e.g. viewable using Chrome developer tools)*/
                                            $.getJSON(emailVerifyApi, {})
                                                    .done(function (data) {
                                                            reportResult(data);
                                                    })
                                                    .fail(function (jqxhr, textStatus, error) {
                                                            var err = textStatus + ", " + error;
                                                            console.log("Request failed: " + err);
                                                    });;
                                    });
                            });
                            /*Output result to the 'validationResult' div element*/
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
            </script>
    </body>
</html>