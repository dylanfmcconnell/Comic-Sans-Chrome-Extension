let enabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggle") {
        enabled = !enabled;
        if(enabled) {
            document.body.style.fontFamily = "Comic Sans MS";
        } else {
            document.body.style.fontFamily = "initial";
            parent.window.location.reload(true);
        }
    }
});