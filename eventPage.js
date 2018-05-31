chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.todo == "showPageAction") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.pageAction.show(tabs[0].id);
            var count = 0;
            setTimeout(function() {
                if (count == 0) {
                    window.open("popup.html",
                        "BA", "width=400,height=700,top=75,left=550,titlebar=no,menubar=0,dialog=yes,minimizable=no,maximizable=no");
                }
                count++;

            }, 5000);
        });
    }
});


//https://docs.google.com/forms/d/e/1FAIpQLScNpnvcBzsPW8jPQN8mr3XsO7Q89fMbzkSQq8oqD3HgkwGEHg/viewform?c=0&w=1