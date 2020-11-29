/*
function setup(){
  noCanvas();
  //let userput = select

}

*/




var state;

function buttonClicked(){

  let param = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(param, gotTabs);
  saveOptions();
  state = document.getElementById('darkSwitch').checked;
  console.log(document.getElementById('darkSwitch').checked);

    function gotTabs(tab){
      let msg = {
        txt: "on"
      }

      let normal = {
        txt: "off"
      }
   

      if (state) {
      
        chrome.tabs.sendMessage(tab[0].id, msg);
       // state = document.getElementById('darkSwitch').checked;
    
        return;
      }else if (!state){
        chrome.tabs.sendMessage(tab[0].id, normal);
      }
     

      //console.log()

  }
}




document.addEventListener('DOMContentLoaded', function () {
  
  restoreOptions();

  //checkState();
  document.getElementById("darkSwitch").addEventListener('click', buttonClicked);
  
 
  console.log("DOM Loaded");
});

// Restores checkbox state using the preferences stored in chrome.storage.sync
function restoreOptions() {
  // Use default value = false.
  chrome.storage.sync.get({
      switchValue: false
  }, function (items) {
      document.getElementById('darkSwitch').checked = items.switchValue;
      state =  document.getElementById('darkSwitch').checked;
      console.log("Restored state: " + state);
      //console.log("Item Value: " + items.switchValue);
    //  checkState(state);
  });
}

function saveOptions(){
    var darkMode = document.getElementById('darkSwitch').checked;

    chrome.storage.sync.set({
        switchValue: darkMode
    });
}


function checkState(state){
  let param = {
    active: true,
    currentWindow: true
  }
    chrome.tabs.query(param, gotTabs);
  // saveOptions();

  //state = document.getElementById('darkSwitch').checked;
  console.log("State is: " + state);
      function gotTabs(tab){
        let msg = {
          txt: "on"
        }

        let normal = {
          txt: "off"
        }
  
        if (state) {
          chrome.tabs.sendMessage(tab[0].id, msg);
          return;
        }else if (!state){
          chrome.tabs.sendMessage(tab[0].id, normal);
          //state = document.getElementById('darkSwitch').checked
        }
    }
}





