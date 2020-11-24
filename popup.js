/*
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById("testing");
    console.log("This is the thing: " + btn);
    // onClick's logic below:
    btn.addEventListener("click", function() {
        testingButton();
    });
});



document.addEventListener('DOMContentLoaded', function (event) {

        // it should work
    var darkSwitch = document.getElementById("darkSwitch");
    darkSwitch.addEventListener('click', testingButton, false);
    console.log("DOM Loaded");
    });

    
function myFunction(){
    var x = document.getElementById("darkSwitch").nodeValue;
    console.log(x);
}


function btnFunction(){
    var x = document.getElementById("darkSwitch").nodeValue;
    console.log(x);
}

function testingButton(){
    chrome.tabs.insertCSS(null, { file: "bbl_dark_mode.css" });
    console.log("Button is Pressed");
}

function restoreOptions() {
    // Use default value = false.
    chrome.storage.sync.get({
        value: false
    }, function (items) {
        document.getElementById('darkSwitch').checked = items.value;
    });


document.addEventListener('DOMContentLoaded', function () {
    restoreOptions();
    document.getElementById("darkSwitch").addEventListener('click', hello);
    alert("DOM Loaded");
});
}




//SOME SHITS
import browser from 'webextension-polyfill'

function insertCSS(file) {
  const style = document.createElement('link')
  style.rel = 'stylesheet'
  style.type = 'text/css'
  style.href = browser.extension.getURL('bbl_dark_mode.css')
  style.id = file
  document.getElementsByTagName('html')[0].appendChild(style)
}

function removeCSS(file) {
  const cssNode = document.getElementById(file)
  cssNode && cssNode.parentNode.removeChild(cssNode)
}

browser.runtime.onMessage.addListener(message => {
  const id = 'redact-the-web'
  if (message.command === 'insertCSS') {
    insertCSS(id)
  } else if (message.command === 'removeCSS') {
    removeCSS(id)
  }
})
*/

var switchStatus;

var cssFile = "bbl_dark_mode";

const urls = ["https://mcl.blackboard.com/ultra/institution-page",
"https://mcl.blackboard.com/ultra/profile",
"https://mcl.blackboard.com/ultra/stream",
"https://mcl.blackboard.com/ultra/course",
"https://mcl.blackboard.com/ultra/organization",
"https://mcl.blackboard.com/ultra/calendar",
"https://mcl.blackboard.com/ultra/messages",
"https://mcl.blackboard.com/ultra/grades",
"https://mcl.blackboard.com/ultra/tools"];

function testingButton(){
    chrome.tabs.insertCSS(null, { file: "bbl_dark_mode.css" });
    alert('turning to dark mode');
}




function hello() {
    checkCheckbox();

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      
        let currentUrl = tabs[0].url;
        
        //console.log(currentUrl);
        alert('status: ' +  currentUrl);

        if(switchStatus){
            // use `url` here inside the callback because it's asynchronous!
            for(i = 0; i < urls.length; i++){
                if(currentUrl == urls[i]){
                    //chrome.tabs.insertCSS(null, { file: "bbl_dark_mode.css" });
                    //alert('turning to dark mode');
                    //loadCSS(cssFile);
                    //loadCSS("bbl_dark_mode.css");
                    addCss("bbl_dark_mode.css");
                    break;
                }
            }

            var body = document.body;

            //body.classList.add("JMaylinCustomStyles");
        }else{
            chrome.tabs.insertCSS(null, { file: "light_mode.css" });
          //  document.getElementById("body").classList.remove('JMaylinCustomStyles');
        }


    });

    
  }

  function loadCSS(filename){ 

    var file = document.createElement("link");
    file.setAttribute("rel", "stylesheet");
    file.setAttribute("type", "text/css");
    file.setAttribute("href", filename);
    document.head.appendChild(file);
    alert(file);
 }

 function addCss(fileName) {

    var head = document.body;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
  
    head.appendChild(link);
  }


  function loadCSSasdaklsjlkas(file) {
    var link = document.createElement("link");
    link.href = chrome.runtime.getURL(file + '.css');
    link.id = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    console.log(link);
    document.getElementsByTagName("body")[0].appendChild(link);
  }
  

  // Restores checkbox state using the preferences stored in chrome.storage.sync

 
function checkCheckbox() {
    switchStatus = document.getElementById("darkSwitch").checked;
}



document.getElementById('darkSwitch').addEventListener('click', hello);
document.getElementById('hello').addEventListener('click', hello);
  



