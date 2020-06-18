window.addEventListener("load", function(){
    console.log("content: window loaded");
    // open calendar sidebar
    chrome.storage.sync.get(["calendarSidebar"], function(result){
        if (result.calendarSidebar) {
            setTimeout(openCalendarSidebar, 1000);
        }
    });

    // toggle request response
    chrome.storage.sync.get(["requestResponse"], function(result){
        // using bind to pass args to the function. See link for more info.
        // https://stackoverflow.com/questions/1190642/how-can-i-pass-a-parameter-to-a-settimeout-callback
        setTimeout(toggleRequestResponse.bind(null, result.requestResponse), 3000);
    });

});

function openCalendarSidebar(){
    var sidebar = document.getElementById("Time");
    if (sidebar != null ){
        sidebar.click();
    }
}



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
