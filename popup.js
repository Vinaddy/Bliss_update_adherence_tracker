function buttonClick(event) {
    var answer = $('#answer').val();
    var cicm = $('#cicm').val();
    var email = $('#email').val();
    if (answer == 'yes' && cicm == ("455,565") && email) {

        var notifOptions = {
            type: 'basic',
            iconUrl: 'icon128.png',
            title: 'Thanks for being updated!',
            message: "Your responses have been recorded and you are required to do this twice a day. The practice is to ensure you have followed the daily updates closely.",
        };
        chrome.notifications.create('limitNotif', notifOptions);
        window.close();

    } else {
        var notifOptions = {
            type: 'basic',
            iconUrl: 'icon128.png',
            title: "Uh-oh!",
            message: "Let's have another look at the CICM updates, shall we?"

        };
        chrome.notifications.create('limitNotif', notifOptions);
    }
}
document.getElementById('submit').addEventListener('click', buttonClick);