// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {
//       alert("hello world");

//     // chrome.tabs.getSelected(null, function(tab) {
//     //   d = document;

//     //   var f = d.createElement('form');
//     //   f.action = 'http://gtmetrix.com/analyze.html?bm';
//     //   f.method = 'post';
//     //   var i = d.createElement('input');
//     //   i.type = 'hidden';
//     //   i.name = 'url';
//     //   i.value = tab.url;
//     //   f.appendChild(i);
//     //   d.body.appendChild(f);
//     //   f.submit();
//     // });
//   }, false);
// }, false);

// content.js
console.log("running wff-test extension");


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function() {
    // for some reason we never see this.
    console.log("document loadded");
    dostuff();
});
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
