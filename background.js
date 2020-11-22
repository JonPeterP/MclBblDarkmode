
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

import browser from 'webextension-polyfill'
let hasInserted = false

browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.executeScript({ file: 'popup.js' })

  if (!hasInserted) {
    browser.tabs.sendMessage(tab.id, {
      command: 'insertCSS',
    })
  } else {
    browser.tabs.sendMessage(tab.id, {
      command: 'removeCSS',
    })
  }
  hasInserted = !hasInserted
})

