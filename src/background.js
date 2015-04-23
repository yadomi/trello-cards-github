chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create({url: chrome.extension.getURL('callback.html')});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.status === 'complete') {
    var token = localStorage.getItem('trello_token')
    chrome.tabs.sendMessage(tabId, {action: 'update', token: token});
  }
});
