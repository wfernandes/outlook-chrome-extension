// options.js

window.addEventListener("load", function(){

    // get the saved values and load them.
    chrome.storage.sync.get(["calendarSidebar"], function(result){
        document.getElementById("calendarSidebar").checked = result.calendarSidebar;
    });

    document.getElementById("outerlookSubmit").onclick = function(e) {
        var calendarSidebar = document.getElementById("calendarSidebar").checked;
        chrome.storage.sync.set({"calendarSidebar": calendarSidebar});
        // close tab after saving.
        close();
    };
});
