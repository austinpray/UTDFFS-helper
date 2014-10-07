chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.update({
   url: "https://www.facebook.com/groups/UTDFFS/requests/"
  }, function () {
    chrome.tabs.executeScript(tab.id, {file: "content.js"}, function() {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      }
    });
  });
});
