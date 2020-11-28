
/*
let state = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!state) {
    chrome.tabs.insertCSS(null, { file: "bbl_dark_mode.css" });
    state = !state;
    return;
  }
  chrome.tabs.insertCSS(null, { file: "light_mode.css" });
  state = !state;
});

/*
manifest code fore background
"background": {
    "scripts": ["background.js"],
    "persistent": false
  },

   "background": {
    "scripts": ["popup.js"],
    "persistent": true
  },

  
  "content_scripts": [
    {
      "matches": ["https://mcl.blackboard.com/ultra/*"],
      "exclude_matches": ["https://mcl.blackboard.com/ultra/courses/*"],
      "js": ["popup.js"]
    }
  ],

*/

///BACKGROUND SCRIPT RUN WHEN CHROME STARTED AND LSITEN ON EVENTS THAT HAPPENS WHEN BUTTON ARE CLICKED OR SOMETHING
//THIS CAN ALSO CALL THE CONTENT SCRIPT AND STUFF
//, "default_popup": "popup.html"

//let state = false;

/*
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  let msg = {
    txt: "hello"
  }

  let normal = {
    txt: "hi"
  }
  //chrome.tabs.sendMessage(tab.id, msg);
  //console.log(tab);

  if (!state) {
    //chrome.tabs.insertCSS(null, { file: "bbl_dark_mode.css" });
    chrome.tabs.sendMessage(tab.id, msg);
    state = !state;
    return;
  }
  //chrome.tabs.insertCSS(null, { file: "light_mode.css" });
  chrome.tabs.sendMessage(tab.id, normal);
  state = !state;
}
*/



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

