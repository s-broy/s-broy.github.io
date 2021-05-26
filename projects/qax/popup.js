// on first load, if object is null or zero return true
function isEmpty(obj) {
  try {
    return Object.keys(obj).length === 0;
  } catch {
    return true;
  }
}

// get checked state of all radio buttons
window.addEventListener(
  "DOMContentLoaded",
  async function () {
    await chrome.storage.sync.get(["checkboxObject"], async function (data) {
      if (isEmpty(data.checkboxObject)) {
        defaultValue = false;
        obj = {};
        checkboxObject = {};
        obj["checkboxObject"] = checkboxObject;
        checkboxObject["altText"] = defaultValue;
        checkboxObject["aliasText"] = defaultValue;
        checkboxObject["hrefText"] = defaultValue;
        checkboxObject["targetText"] = defaultValue;
        checkboxObject["nbspText"] = defaultValue;
        checkboxObject["trackingTText"] = defaultValue;
        checkboxObject["trackingLText"] = defaultValue;
        checkboxObject["offText"] = defaultValue;
        chrome.storage.sync.set(obj);
        document.getElementById("altText").checked = defaultValue;
        document.getElementById("aliasText").checked = defaultValue;
        document.getElementById("hrefText").checked = defaultValue;
        document.getElementById("targetText").checked = defaultValue;
        document.getElementById("nbspText").checked = defaultValue;
        document.getElementById("trackingTText").checked = defaultValue;
        document.getElementById("trackingLText").checked = defaultValue;
        document.getElementById("offText").checked = defaultValue;
      } else {
        document.getElementById("altText").checked =
          data.checkboxObject["altText"];
        document.getElementById("aliasText").checked =
          data.checkboxObject["aliasText"];
        document.getElementById("hrefText").checked =
          data.checkboxObject["hrefText"];
        document.getElementById("targetText").checked =
          data.checkboxObject["targetText"];
        document.getElementById("nbspText").checked =
          data.checkboxObject["nbspText"];
        document.getElementById("trackingTText").checked =
          data.checkboxObject["trackingTText"];
        document.getElementById("trackingLText").checked =
          data.checkboxObject["trackingLText"];
        document.getElementById("offText").checked =
          data.checkboxObject["offText"];
      }

      // prepare to send data to content.js
      let params = {
        active: true,
        currentWindow: true,
      };
      chrome.tabs.query(params, tabsOnLoad);

      // on loading (opening) popup.js, send messages
      // to content.js based on checkboxObject data values
      function tabsOnLoad(tabsAutomatic) {
        // check if checkboxObject is undefined, which means ALL checkboxes are unchecked.
        // this will occur when the extension is loaded for the first time
        if (data.checkboxObject === undefined) {
          // send message to content.js
          let msg = {
            txt: "offTextUnchecked",
          };
          chrome.tabs.sendMessage(tabsAutomatic[0].id, msg);
        } else {
          if (document.querySelector('input[name="attribute"]')) {
            const radioButton = document.querySelectorAll(
              'input[type="radio"]'
            );
            const offText = document.querySelector('input[value="offText"]');
            for (var i = 0; i < radioButton.length; i++) {
              const item = radioButton[i].value;
              if (radioButton[i].checked && offText.checked === false) {
                // send message to content.js
                let msg = {
                  txt: item + "Checked",
                };
                chrome.tabs.sendMessage(tabsAutomatic[0].id, msg);
                console.log("true: " + item);
              } else if (radioButton[i].checked && offText.checked === true) {
                // send message to content.js
                let msg = {
                  txt: item + "Unchecked",
                };
                chrome.tabs.sendMessage(tabsAutomatic[0].id, msg);
                console.log("false: " + item);
              }
            }
          }
        }
      }
    });
  },
  false
);

// save check state of all radio buttons
function storeChange() {
  obj = {};
  checkboxObject = {};
  obj["checkboxObject"] = checkboxObject;
  checkboxObject["altText"] = document.getElementById("altText").checked;
  checkboxObject["aliasText"] = document.getElementById("aliasText").checked;
  checkboxObject["hrefText"] = document.getElementById("hrefText").checked;
  checkboxObject["targetText"] = document.getElementById("targetText").checked;
  checkboxObject["nbspText"] = document.getElementById("nbspText").checked;
  checkboxObject["trackingTText"] = document.getElementById("trackingTText").checked;
  checkboxObject["trackingLText"] = document.getElementById("trackingLText").checked;
  checkboxObject["offText"] = document.getElementById("offText").checked;
  chrome.storage.sync.set(obj, function () {
    console.log("checkboxObject saved");
  });
}

if (document.querySelector('input[name="attribute"]')) {
  document.querySelectorAll('input[type="radio"]').forEach((el) => {
    el.addEventListener("change", function (event) {
      storeChange();
      const item = event.target.value;
      let params = {
        active: true,
        currentWindow: true,
      };
      chrome.tabs.query(params, gotTabs);
      function gotTabs(tabs) {
        // if checked, send to if checked statement in content.js (line ~32)
        itemChecked = event.target.checked;
        console.log(item + " is " + itemChecked);
        if (
          itemChecked === true &&
          (item === "altText" ||
            item === "aliasText" ||
            item === "hrefText" ||
            item === "targetText" ||
            item === "nbspText" ||
            item === "trackingTText" ||
            item === "trackingLText")
        ) {
          let msg = {
            txt: item + "Checked",
          };
          chrome.tabs.sendMessage(tabs[0].id, msg);
        } else if (itemChecked === true && item === "offText") {
          // if offText is selected, send to if unchecked statement in content.js (line ~60)
          let msg = {
            txt: item + "Unchecked",
          };
          chrome.tabs.sendMessage(tabs[0].id, msg);
        }
      }
    });
  });
}

/* On button click listener for Open All Links */
const linksBtn = document.querySelector('input[name="linksBtn"]');

linksBtn.addEventListener(
  "click",
  function () {
    let params = {
      active: true,
      currentWindow: true,
    };
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs) {
      let msg = {
        txt: "linksTextChecked",
      };
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  },
  false
);
