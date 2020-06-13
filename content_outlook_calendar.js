// This script will work for outlook.office.com/calenar/deeplink
// That is, only when a separate dialog box is open for calendar.

window.addEventListener("load", function(){
    // toggle request response
    chrome.storage.sync.get(["requestResponse"], function(result){
        // using bind to pass args to the function. See link for more info.
        // https://stackoverflow.com/questions/1190642/how-can-i-pass-a-parameter-to-a-settimeout-callback
        setTimeout(toggleRequestResponse.bind(null, result.requestResponse), 3000);
    });

});


// toggleRequestResponse toggles the RequestResponse option. So far this works
// only when the external dialog pops up and not yet on
// outlook.calendar.office/calendar.
function toggleRequestResponse(toggle) {
    if (toggle) {
        var responseOptionsEl = document.getElementsByName("Response options");
        if (responseOptionsEl != null) {
            if (responseOptionsEl.length > 0) {
                responseOptionsEl[0].click();
            }
            var requestResponseEl = document.getElementsByName("Request responses");
            if (requestResponseEl != null && requestResponseEl.length > 0) {
                requestResponseEl[0].click();
            }
        }
    }
}
