window.addEventListener("load", function(){
    // open calendar sidebar
    chrome.storage.sync.get(["calendarSidebar"], function(result){
        if (result.calendarSidebar) {
            setTimeout(openCalendarSidebar, 1000);
        }
    });
});


function openCalendarSidebar(){
    var sidebar = document.getElementById("Time");
    if (sidebar != null ){
        sidebar.click();
    }
}
