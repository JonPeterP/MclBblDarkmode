
/*
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  //console.log("Is doing this now"); 
  //chrome.tabs.executeScript(null,{file:"content.js"}, _=> chrome.runtime.lastError);
});
*/

chrome.tabs.onActivated.addListener( function(activeInfo){
  chrome.tabs.get(activeInfo.tabId, function(tab){
      currenttTab = tab.url;
 //     console.log("you are here on activated: "+ currenttTab);
      
  let param = {
    active: true,
    currentWindow: true
  }
      chrome.tabs.query(param, gotTabs);
      function gotTabs(tab){
      chrome.tabs.sendMessage(tab[0].id, currenttTab);
      }
  });
});


chrome.tabs.onUpdated.addListener((tabId, change, tab) => {

  /*
  chrome.tabs.sendMessage(tabId, {text: "are_you_there_content_script?"}, function(gotMessage) {


    gotMessage = gotMessage || {};
    if (gotMessage.status != 'yes') {
      if(chrome.runtime.lastError) {
        }
      console.log("CONTENT NOT LOADED, EXECUTING NOW");
      chrome.tabs.executeScript(tabId.id, { file: "content.js" }, _=> chrome.runtime.lastError);
    
  }
  });
  */
    //console.log("EXECUTING CHECK");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      try{
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        if(chrome.runtime.lastError) {
        }
        if (response) {
         //   console.log("Already there");
        }
        else {
          chrome.tabs.executeScript(tabId.id, { file: "content.js" }, _=> chrome.runtime.lastError);
         // console.log("Not there, inject contentscript");
        }
      });}catch(e){
      console.log("Error on: " + e);
    }
      
  });

  

  if (tab.active && change.url) {
 //   console.log("you are here on Updated: "+change.url);      
  let param = {
    active: true,
    currentWindow: true
  }
    chrome.tabs.query(param, gotTabs);
      function gotTabs(tab){
      chrome.tabs.sendMessage(tab[0].id, change.url);
    }
  }
});


/*
document.addEventListener('DOMContentLoaded', function () {
  //restoreOptions();
  //loadIfDarkmode();
  //console.log("BACKGROUND DOM Loaded");
});



let state = false;

function restoreOptions() {
  // Use default value = false.
  chrome.storage.sync.get({
      switchValue: true
  }, function (items) {
      state = items.switchValue;
      //document.getElementById('darkSwitch').checked = items.switchValue;
      //console.log("Item Value: " + items.switchValue);
  });
}
*/

/*
// listen for requests
chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
  if (req.loaded === false) {
      chrome.tabs.executeScript(tabId, { file: "content.js" }, function() {
        // set the global variable that the scripts have been loaded
        // this could also be set as part of the enhance.js lib
        chrome.tabs.executeScript(tabId, { code: "var ContentLibIsLoaded = true;" });
    
      console.log("Script not loaded, executing now");
   });

  }
   console.log("Scipt IS ALREADY loaded");
});
*/