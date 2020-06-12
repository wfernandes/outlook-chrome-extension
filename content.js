// content.js
console.log("running wff-test extension");

window.addEventListener("load", function(){
    console.log("content: window loaded");
    chrome.storage.sync.get(["calendarSidebar"], function(result){
        console.log("content: calendarSidebar", result.calendarSidebar);
        if (result.calendarSidebar) {
            openCalendarSidebar();
        }
    });
});

function openCalendarSidebar(){
    console.log("content: clicking time");
    document.getElementById("Time").click();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
        dostuff();
    }
  }
);

var done = false;

function dostuff() {
    if (!done) {
        console.log("do stuff");
        var responseOptionsEl = document.getElementsByName("Response options");
        console.log("getting response options element", responseOptionsEl);
        if (responseOptionsEl.length > 0) {
            console.log("clicking response options");
            responseOptionsEl[0].click();
        }
        var requestResponseEl = document.getElementsByName("Request responses");
        console.log("moving on", requestResponseEl);
        if (requestResponseEl.length > 0) {
            console.log("clicking request responses");
            requestResponseEl[0].click();
            done = true;
        }
    }
}

// try for 4s to try and get the elements and click them.
for (let step = 0; step < 4; step++) {
    sleep(1000).then(() => {
        dostuff();
    });
}

// NEXT STEPS
// See if you can intercept a key event
// See if you can run the extension based on a click of an element like
// opening calendar events.
