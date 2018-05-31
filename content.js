  chrome.runtime.sendMessage({ todo: "showPageAction" });
  document.addEventListener('DOMContentLoaded', function () {
    var buttonOnSite = document.getElementById("buttonOnSite"),
    parent = buttonOnSite.parentElement,
    next = buttonOnSite.nextSibling,
    button = document.createElement("button"),
    text = document.createTextNode("test");

button.appendChild(text);
if (next) parent.insertBefore(button, next);
else parent.appendChild(button);
  })