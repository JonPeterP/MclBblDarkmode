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

var x;

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
        
        alert('status: ' + x);

        if(x){
            // use `url` here inside the callback because it's asynchronous!
            for(i = 0; i < urls.length; i++){
                if(currentUrl == urls[i]){
                    chrome.tabs.insertCSS(null, { file: "bbl_dark_mode.css" });
                    //alert('turning to dark mode');
                    break;
                }
            }

            var body = document.body;

            body.classList.add("MyClass");
        }else{
            document.getElementById("body").classList.remove('newClass');
        }


    });

    
  }

  

  // Restores checkbox state using the preferences stored in chrome.storage.sync

 
function checkCheckbox() {
    x = document.getElementById("darkSwitch").checked;
}



document.getElementById('darkSwitch').addEventListener('click', hello);
document.getElementById('hello').addEventListener('click', hello);
  



