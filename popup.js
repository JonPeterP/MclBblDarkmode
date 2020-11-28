function setup(){
  noCanvas();
  //let userput = select

}





let state = false;

//chrome.browserAction.onClicked.addListener(buttonClicked);

//document.getElementById('darkSwitch').onclick = buttonClicked;

function buttonClicked(switchValue){

  let param = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(param, gotTabs);
  saveOptions();
    function gotTabs(tab){
      let msg = {
        txt: "on"
      }

      let normal = {
        txt: "off"
      }
   

      if (state) {
      
        chrome.tabs.sendMessage(tab[0].id, normal);
        state = !state;
        //saveOptions();
        return;
      }else{
  
        chrome.tabs.sendMessage(tab[0].id, msg);
        state = !state;
       
      }
     

      //console.log()

   
  }
}


document.addEventListener('DOMContentLoaded', function () {
  restoreOptions();
  
 
  //loadIfDarkmode();
  document.getElementById("darkSwitch").addEventListener('click', buttonClicked);
  
 
  console.log("DOM Loaded");
});

// Restores checkbox state using the preferences stored in chrome.storage.sync
function restoreOptions() {
  // Use default value = false.
  chrome.storage.sync.get({
      switchValue: true
  }, function (items) {
      state = items.switchValue;
      document.getElementById('darkSwitch').checked = items.switchValue;
      //console.log("Item Value: " + items.switchValue);
  });
}

function saveOptions(){
    var darkMode = document.getElementById('darkSwitch').checked;

    chrome.storage.sync.set({
        switchValue: darkMode
    });
}





