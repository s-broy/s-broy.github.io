// wait for message from popup.js
chrome.runtime.onMessage.addListener(gotMessage);

let initted = false;
let images = null;
let links = null;
//const relativeDivs = [];

function initialize() {
  images = document.querySelectorAll("img");
  links = document.querySelectorAll("a");


/*
  links.forEach((link) => {
    const divRelative = document.createElement("div");
    divRelative.classList.add("divRelativeClass");
    divRelative.style.position = "relative";
    link.parentElement.insertBefore(divRelative, link);
    relativeDivs.push(divRelative);
  });
*/


  initted = true;
}

function gotMessage(message) {
  if (!initted) {
    //console.log("initializing");
    initialize();
  }
  const [, type, isChecked] = message.txt.match(/^(\w+)Text(\w+)$/);

  const targets = type === "alt" ? images : links;

  if (isChecked === "Checked") {

    const parents = document.querySelectorAll('.divRelativeClass');
    parents.forEach((parent) => {
      if (parent) {
        parent.remove();
        console.clear();
      }
    });


    targets.forEach((target) => {
      const nodeName = target.nodeName.toLowerCase();
      let divRelative =
        nodeName === "a"
          ? target.parentElement.previousElementSibling
          : target.parentElement.previousElementSibling;
      const value = target.getAttribute(type);
      if (value) {


        const divRelative = document.createElement("div");
        divRelative.classList.add("divRelativeClass");
        divRelative.style.position = "relative";


        const div = document.createElement("div");
        div.textContent = value;
        div.className = 'divAbsoluteClass';
        div.style =
          "position: absolute; background-color: rgba(33, 33, 36, 0.8); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.8); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width:125px; font-family: Arial, sans-serif; font-size: 10px; padding: 5px; word-break: break-word; font-weight: 400; text-align: left; z-index: 5;";
        divRelative.appendChild(div);
        target.parentElement.insertBefore(divRelative, target);
        console.log(value);
      }
    });
  }
  else if (isChecked === "Unchecked") {
    const parents = document.querySelectorAll('.divRelativeClass');
    parents.forEach((parent) => {
      if (parent) {
        parent.remove();
        console.clear();
      }
    });
  }
  return;
}
