const urls = ["https://mcl.blackboard.com/ultra/institution-page",
"https://mcl.blackboard.com/ultra/profile",
"https://mcl.blackboard.com/ultra/stream",
"https://mcl.blackboard.com/ultra/course",
"https://mcl.blackboard.com/ultra/organization",
"https://mcl.blackboard.com/ultra/calendar",
"https://mcl.blackboard.com/ultra/messages",
"https://mcl.blackboard.com/ultra/grades",
"https://mcl.blackboard.com/ultra/tools"];


 function addCss(fileName) {  

    var head = document.head;
    var link = document.createElement("link");
  
    link.id = fileName;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = chrome.extension.getURL(fileName);
  
    //alert(link);
    head.appendChild(link);
    //document.getElementsByTagName("html")[0].appendChild(link);
   
  }

  function removeCSS(fileName) {
    var cssNode = document.getElementById(fileName);
    cssNode && cssNode.parentNode.removeChild(cssNode);
  }



console.log("Content Script Here");
 

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
  console.log(message);

  if(message.txt === "on"){
    addCss("bbl_dark_mode.css");
  }else if(message.txt === "off"){
    removeCSS("bbl_dark_mode.css");
  }else if(message.indexOf('http') > -1){
    console.log("Message is a link");
    updateOnTabFocus(message);
  }else{
    console.log("IDK WHAT THE PROBLEM IS");
  }
}

restoreOptions();
//checkState();



function restoreOptions() {
  // Use default value = false.
  chrome.storage.sync.get({
      switchValue: false
  }, function (items) {
      //document.getElementById('darkSwitch').checked = items.switchValue;
      //state =  items.switchValue;
      console.log("Content Restored state: " + items.switchValue);
      //console.log("Item Value: " + items.switchValue);

      if(items.switchValue){
        console.log("ADDING CSS NOW");
        addCss("bbl_dark_mode.css");
      }else if(!items.switchValue){
        removeCSS("bbl_dark_mode.css");
        console.log("removing CSS");
      }else{
       // console.log("IDK WHAT THE PROBLEM IS");
      }
  });
}

function updateOnTabFocus(link){

  chrome.storage.sync.get({
    switchValue: false
  }, function(item){
      if(urls.includes(link) && item.switchValue && !document.getElementById("bbl_dark_mode.css")){
          console.log("true on update focuse");
          addCss('bbl_dark_mode.css');
      }else if(urls.includes(link) && !item.switchValue && document.getElementById("bbl_dark_mode.css")){
          removeCSS('bbl_dark_mode.css');
      }else if(!urls.includes(link) && item.switchValue && document.getElementById("bbl_dark_mode.css")){
        removeCSS('bbl_dark_mode.css');
      }
    });
}


/*
//saveOptions();
function saveOptions(){

  chrome.storage.sync.get({
    switchValue: false
  }, function
  
  console.log("SWITCH VALUE ON SAVE OPTION IS: " + switchValue);

  //var currentlyarkMode = document.getElementById('darkSwitch').checked;

  chrome.storage.sync.set({
     // switchValue: darkMode
  });
}

*/


