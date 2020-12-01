
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  //console.log("Is doing this now"); 
  //chrome.tabs.executeScript(null,{file:"content.js"}, _=> chrome.runtime.lastError);
});


chrome.tabs.onActivated.addListener( function(activeInfo){
  chrome.tabs.get(activeInfo.tabId, function(tab){
      currenttTab = tab.url;
      console.log("you are here on activated: "+ currenttTab);
      
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
  if (tab.active && change.url) {
     //console.log("you are here on Updated: "+change.url);      
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


document.addEventListener('DOMContentLoaded', function () {
  //restoreOptions();
  //loadIfDarkmode();
  console.log("BACKGROUND DOM Loaded");
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

function loadIfDarkmode(){

  let param = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(param, gotTabs);

    function gotTabs(tab){
      let msg = {
        txt: "off"
      }

      let normal = {
        txt: "on"
      }
      //chrome.tabs.sendMessage(tab.id, msg);
      //console.log(tab);

      if (!state) {
        //chrome.tabs.insertCSS(null, { file: "bbl_dark_mode.css" });
        chrome.tabs.sendMessage(tab[0].id, msg);
        state = !state;
        //saveOptions();
        return;
      }
      //chrome.tabs.insertCSS(null, { file: "light_mode.css" });
      chrome.tabs.sendMessage(tab[0].id, normal);
      state = !state;

      //console.log()

    //  saveOptions();
  }
}


/*
"background": {
    "scripts": ["background.js"]
  },
*/

