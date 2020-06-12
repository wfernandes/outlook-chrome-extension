// options.js

window.addEventListener("load", function(){

    // get the saved values and load them.
    chrome.storage.sync.get(["calendarSidebar", "requestResponse"], function(result){
        document.getElementById("calendarSidebar").checked = result.calendarSidebar;
        document.getElementById("requestResponse").checked = result.requestResponse;
    });

    document.getElementById("outerlookSubmit").onclick = function(e) {
        var calendarSidebar = document.getElementById("calendarSidebar").checked;
        var requestResponse = document.getElementById("requestResponse").checked;
        chrome.storage.sync.set({"calendarSidebar": calendarSidebar});
        chrome.storage.sync.set({"requestResponse": requestResponse});
        // close tab after saving.
        close();
    };
});
