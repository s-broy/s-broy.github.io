// wait for message from popup.js
chrome.runtime.onMessage.addListener(gotMessage);

let initted = false;
let images = null;
let links = null;

function initialize() {
  images = document.querySelectorAll("img");
  links = document.querySelectorAll("a");
  textTags = document.querySelectorAll("p, h1, h2, h3");

  textTags.forEach((textTag) => {
    if (textTag.innerHTML.match("&nbsp;")) {
      const nbspSpan = "<span class='nbspClass'>&nbsp;</span>";
      textTag.innerHTML = textTag.innerHTML.replaceAll("&nbsp;", nbspSpan);
    }
  })

  initted = true;
}

function gotMessage(message) {
  if (!initted) {
    initialize();
  }

  /* DEFINE message.txt string */
  const [, type, isChecked] = message.txt.match(/^(\w+)Text(\w+)$/);
  const targets = type === "alt" ? images : links;

  /* NBSP */
  // if (isChecked === "On") {
  //   const parents = document.querySelectorAll(".divRelativeClass");
  //   parents.forEach((parent) => {
  //     if (parent) {
  //       parent.remove();
  //       console.clear();
  //     }
  //   });
  //   const pSpanHs = document.querySelectorAll(
  //     "p, span, h1, h2, h3, h4, h5, h6"
  //   );
  //   pSpanHs.forEach((pSpanH) => {
  //     if (pSpanH.innerHTML.match(/&nbsp;/g)) {
  //       pSpanH.innerHTML = pSpanH.innerHTML.replace(/&nbsp;/g, "<span class='nbspSpan' style='background-color: yellow;'>&nbsp;</span>");
  //       console.log("hello from isChecked ON if statement");
  //     }
  //   });
  // }

  /* IF ANY RADIO BUTTON EXCEPT "OFF" IS CHECKED */
  if (isChecked === "Checked") {
    const parents = document.querySelectorAll(".divRelativeClass");
    const nbspClasses = document.querySelectorAll(".nbspClass");

    nbspClasses.forEach((nbspClass) => {
      nbspClass.style["background-color"] = "";
    });

    parents.forEach((parent) => {
      if (parent) {
        parent.remove();
        console.clear();
      }
    });

    /* NBSP */
    // if (type === "nbsp") {
    //   const pTags = document.querySelectorAll("p");
    //   const spanTags = document.querySelectorAll("span");
    //   const hTags = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    //   const divRelative = document.createElement("div");
    //   divRelative.classList.add("divRelativeClass");
    //   divRelative.style =
    //     "position: fixed; top: 0; left: 50%; margin-left: -300px; z-index: 6;";

    //   pTags.forEach((pTag) => {
    //     if (pTag.innerHTML.match(/&nbsp;/g)) {
    //       const nbspP = document.createElement("div");
    //       nbspP.textContent = "Nbsp found in a p tag: " + pTag.innerHTML;
    //       nbspP.className = "nbsp";
    //       nbspP.style =
    //         "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
    //       divRelative.appendChild(nbspP);
    //       document.body.insertBefore(divRelative, document.body.firstChild);
    //     }
    //   });
    // }

    /* LOOP OVER CHECKED TARGET */
    if (type === "alt") {
      console.clear();

      targets.forEach((target) => {
        //console.log("hello from ALT targets forEach");
        //const nodeName = target.nodeName.toLowerCase();
        //let divRelative = nodeName === "a" ? target.parentElement.previousElementSibling : target.parentElement.previousElementSibling;
        const value = target.getAttribute(type);
        /* ALT CHECKED */
        if (value && type === "alt") {
          const divRelative = document.createElement("div");
          divRelative.classList.add("divRelativeClass");
          divRelative.style.position = "relative";

          const div = document.createElement("div");
          div.textContent = value;
          div.className = "divAbsoluteClass";
          div.style =
            "line-height: normal; position: absolute; background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width:125px; font-family: Arial, sans-serif; font-size: 12px; padding: 5px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(div);
          target.parentElement.insertBefore(divRelative, target);
          console.log(value);
        }
      });
    }
    if (type === "alias" || type === "href" || type === "target" || type === "links") {
      console.clear();
      targets.forEach((target) => {
        const value = target.getAttribute(type);
        /* ALIAS, URL, OR TARGET CHECKED */
        if (value) {
          /* CHECK FOR "ANIMATED" IMAGES */
          if (target.parentElement.classList.contains("car-cont")) {
            const divRelative = document.createElement("div");
            divRelative.classList.add("divRelativeClass");
            divRelative.style.position = "relative";

            const div = document.createElement("div");
            div.textContent = value;
            div.className = "divAbsoluteClass";
            div.style =
              "line-height: normal; position: absolute; background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width:125px; font-family: Arial, sans-serif; font-size: 12px; padding: 5px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
            divRelative.appendChild(div);
            target.insertAdjacentElement("afterbegin", divRelative);
            console.log(value);
          } else {
            const divRelative = document.createElement("div");
            divRelative.classList.add("divRelativeClass");
            divRelative.style.position = "relative";

            const div = document.createElement("div");
            div.textContent = value;
            div.className = "divAbsoluteClass";
            div.style =
              "line-height: normal; position: absolute; background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width:125px; font-family: Arial, sans-serif; font-size: 12px; padding: 5px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
            divRelative.appendChild(div);
            target.parentElement.insertBefore(divRelative, target);
            console.log(value);
          }
        }
        /* OPEN ALL LINKS */
        if (target.href && type === "links") {
          window.open(target.href, "_blank");
        }
      });

      const divAbsoluteClass = document.querySelector(".divAbsoluteClass");
      if (type === "alias" && divAbsoluteClass === null) {
        const divRelative = document.createElement("div");
        divRelative.classList.add("divRelativeClass");
        divRelative.style =
          "position: fixed; top: 0; left: 50%; margin-left: -300px; z-index: 6;";
        const divAbsoluteClass = document.createElement("div");
        divAbsoluteClass.innerHTML = "No aliases found";
        divAbsoluteClass.className = "divAbsoluteClass";
        divAbsoluteClass.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(divAbsoluteClass);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }
    }

    /* TRACKING TOYOTA*/
    if (type === "trackingT") {
      console.clear();
      const styleEls = document.querySelectorAll("style");

      const divRelative = document.createElement("div");
      divRelative.classList.add("divRelativeClass");
      divRelative.style =
        "position: fixed; top: 0; left: 50%; margin-left: -300px; z-index: 6;";

      styleEls.forEach((styleEl) => {
        if (styleEl.innerText.match("emltrk")) {
          const emlTrkCss = document.createElement("div");
          emlTrkCss.innerHTML =
            "EmlTrk CSS found:<br/>" +
            styleEl.innerText.replaceAll(
              "emltrk",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>emltrk</span>"
            );
          emlTrkCss.className = "eml-trk-css";
          emlTrkCss.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(emlTrkCss);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }

        if (styleEl.innerText.match("emanalytics")) {
          const emAnalyticsCss = document.createElement("div");
          emAnalyticsCss.innerHTML =
            "EmAnalytics CSS found:<br/>" +
            styleEl.innerText.replaceAll(
              "emanalytics",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>emanalytics</span>"
            );
          emAnalyticsCss.className = "em-analytics-css";
          emAnalyticsCss.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(emAnalyticsCss);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }
      });

      images.forEach((image) => {
        if (image.src.indexOf("ffcb10") != -1) {
          const etImg = document.createElement("div");
          etImg.innerHTML =
            'ET image tag found:<br/>&#60;img src="' +
            image.src.replace(
              "ffcb10",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>ffcb10</span>"
            ) +
            '"' +
            ' width="' +
            image.width +
            '"' +
            ' height="' +
            image.height +
            '"&#62;';
          etImg.className = "et-img";
          etImg.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(etImg);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }

        if (image.src.indexOf("emltrk") != -1) {
          const emlTrkImg = document.createElement("div");
          emlTrkImg.innerHTML =
            'EmlTrk image tag found:<br/>&#60;img src="' +
            image.src.replace(
              "emltrk",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>emltrk</span>"
            ) +
            '"' +
            ' width="' +
            image.width +
            '"' +
            ' height="' +
            image.height +
            '"&#62;';
          emlTrkImg.className = "eml-trk-img";
          emlTrkImg.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(emlTrkImg);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }

        if (image.src.indexOf("emanalytics") != -1) {
          const emAnalyticsImg = document.createElement("div");
          emAnalyticsImg.innerHTML =
            'EmAnalytics image tag found:<br/>&#60;img src="' +
            image.src.replace(
              "emanalytics",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>emanalytics</span>"
            ) +
            '"' +
            ' width="' +
            image.width +
            '"' +
            ' height="' +
            image.height +
            '"&#62;';
          emAnalyticsImg.className = "em-analytics-img";
          emAnalyticsImg.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(emAnalyticsImg);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }
      });
      /* IF TRACKING NOT FOUND */
      const emlTrkCssEl = document.querySelector(".eml-trk-css");
      const emAnalyticsCssEl = document.querySelector(".em-analytics-css");
      const etImgEl = document.querySelector(".et-img");
      const emlTrkImgEl = document.querySelector(".eml-trk-img");
      const emAnalyticsImgEl = document.querySelector(".em-analytics-img");

      if (emlTrkCssEl === null) {
        const emlTrkCss = document.createElement("div");
        emlTrkCss.innerHTML = "EmlTrk CSS not found";
        emlTrkCss.className = "eml-trk-css";
        emlTrkCss.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(emlTrkCss);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }

      if (emAnalyticsCssEl === null) {
        const emAnalyticsCss = document.createElement("div");
        emAnalyticsCss.innerHTML = "EmAnalytics CSS not found";
        emAnalyticsCss.className = "em-analytics-css";
        emAnalyticsCss.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(emAnalyticsCss);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }

      if (etImgEl === null) {
        const etImg = document.createElement("div");
        etImg.innerHTML = "ET image tag not found";
        etImg.className = "et-img";
        etImg.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(etImg);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }

      if (emlTrkImgEl === null) {
        const emlTrkImg = document.createElement("div");
        emlTrkImg.innerHTML = "EmlTrk image tag not found";
        emlTrkImg.className = "eml-trk-img";
        emlTrkImg.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(emlTrkImg);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }

      if (emAnalyticsImgEl === null) {
        const emAnalyticsImg = document.createElement("div");
        emAnalyticsImg.innerHTML = "EmAnalytics image tag not found";
        emAnalyticsImg.className = "em-analytics-img";
        emAnalyticsImg.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(emAnalyticsImg);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }
    }

    /* TRACKING LEXUS*/
    if (type === "trackingL") {
      console.clear();
      const styleEls = document.querySelectorAll("style");

      const divRelative = document.createElement("div");
      divRelative.classList.add("divRelativeClass");
      divRelative.style =
        "position: fixed; top: 0; left: 50%; margin-left: -300px; z-index: 6;";

      styleEls.forEach((styleEl) => {
        if (styleEl.innerText.match("emltrk")) {
          const emlTrkCss = document.createElement("div");
          emlTrkCss.innerHTML =
            "EmlTrk CSS found:<br/>" +
            styleEl.innerText.replaceAll(
              "emltrk",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>emltrk</span>"
            );
          emlTrkCss.className = "eml-trk-css";
          emlTrkCss.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(emlTrkCss);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }

        if (styleEl.innerText.match("analytics")) {
          const analyticsCss = document.createElement("div");
          analyticsCss.innerHTML =
            "Analytics CSS found:<br/>" +
            styleEl.innerText.replaceAll(
              "analytics",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>analytics</span>"
            );
          analyticsCss.className = "analytics-css";
          analyticsCss.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(analyticsCss);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }
      });

      images.forEach((image) => {
        if (image.src.indexOf("ffcb10") != -1) {
          const etImg = document.createElement("div");
          etImg.innerHTML =
            'ET image tag found:<br/>&#60;img src="' +
            image.src.replace(
              "ffcb10",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>ffcb10</span>"
            ) +
            '"' +
            ' width="' +
            image.width +
            '"' +
            ' height="' +
            image.height +
            '"&#62;';
          etImg.className = "et-img";
          etImg.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(etImg);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }

        if (image.src.indexOf("emltrk") != -1) {
          const emlTrkImg = document.createElement("div");
          emlTrkImg.innerHTML =
            'EmlTrk image tag found:<br/>&#60;img src="' +
            image.src.replace(
              "emltrk",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>emltrk</span>"
            ) +
            '"' +
            ' width="' +
            image.width +
            '"' +
            ' height="' +
            image.height +
            '"&#62;';
          emlTrkImg.className = "eml-trk-img";
          emlTrkImg.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(emlTrkImg);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }

        if (image.src.indexOf("analytics") != -1) {
          const analyticsImg = document.createElement("div");
          analyticsImg.innerHTML =
            'Analytics image tag found:<br/>&#60;img src="' +
            image.src.replace(
              "analytics",
              "<span style='color: red; font-family: Arial, sans-serif; font-size: 12px; font-weight: 800;'>analytics</span>"
            ) +
            '"' +
            ' width="' +
            image.width +
            '"' +
            ' height="' +
            image.height +
            '"&#62;';
          analyticsImg.className = "analytics-img";
          analyticsImg.style =
            "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
          divRelative.appendChild(analyticsImg);
          document.body.insertBefore(divRelative, document.body.firstChild);
        }
      });
      /* IF TRACKING NOT FOUND */
      const emlTrkCssEl = document.querySelector(".eml-trk-css");
      const analyticsCssEl = document.querySelector(".analytics-css");
      const etImgEl = document.querySelector(".et-img");
      const emlTrkImgEl = document.querySelector(".eml-trk-img");
      const analyticsImgEl = document.querySelector(".analytics-img");

      if (emlTrkCssEl === null) {
        const emlTrkCss = document.createElement("div");
        emlTrkCss.innerHTML = "EmlTrk CSS not found";
        emlTrkCss.className = "eml-trk-css";
        emlTrkCss.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(emlTrkCss);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }

      if (analyticsCssEl === null) {
        const analyticsCss = document.createElement("div");
        analyticsCss.innerHTML = "Analytics CSS not found";
        analyticsCss.className = "analytics-css";
        analyticsCss.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(analyticsCss);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }

      if (etImgEl === null) {
        const etImg = document.createElement("div");
        etImg.innerHTML = "ET image tag not found";
        etImg.className = "et-img";
        etImg.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(etImg);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }

      if (emlTrkImgEl === null) {
        const emlTrkImg = document.createElement("div");
        emlTrkImg.innerHTML = "EmlTrk image tag not found";
        emlTrkImg.className = "eml-trk-img";
        emlTrkImg.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(emlTrkImg);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }

      if (analyticsImgEl === null) {
        const analyticsImg = document.createElement("div");
        analyticsImg.innerHTML = "Analytics image tag not found";
        analyticsImg.className = "analytics-img";
        analyticsImg.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(analyticsImg);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }
    }

    /* NEW NBSP CHECK*/
    if (type === "nbsp") {
      console.clear();
      if (nbspClasses[0] === undefined) {
        const divRelative = document.createElement("div");
        divRelative.classList.add("divRelativeClass");
        divRelative.style =
        "position: fixed; top: 0; left: 50%; margin-left: -300px; z-index: 6;";
        const nbspClassesDiv = document.createElement("div");
        nbspClassesDiv.innerHTML = "No &#38;nbsp; found in p tags or heading tags";
        nbspClassesDiv.className = "nbsp-classes-div";
        nbspClassesDiv.style =
          "background-color: rgba(33, 33, 36, 0.9); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.9); background-clip: border-box; background-clip: content-box; background-clip: padding-box; width: 587px; font-family: Arial, sans-serif; font-size: 12px; padding: 6px; word-break: break-word; white-space: normal; font-weight: 400; text-align: left; z-index: 6;";
        divRelative.appendChild(nbspClassesDiv);
        document.body.insertBefore(divRelative, document.body.firstChild);
      }
      if (nbspClasses) {
        nbspClasses.forEach((nbspClass) => {
          // if &nbsp; occurs after a letter, number or whitespace character ([\r\n\t\g\b ])
          //if (pTag.innerHTML.match(/[a-zA-Z0-9\s]+&nbsp;/g)) {
            nbspClass.style["background-color"] = "yellow";
            //nbspClass.innerHTML.replace(/&nbsp;/g, "<mark>&nbsp;</mark>");
          //}
        })
      }
    }

  } else if (isChecked === "Unchecked") {
    /* IF OFF RADIO BUTTON IS CHECKED */
    
    const parents = document.querySelectorAll(".divRelativeClass");
    const nbspClasses = document.querySelectorAll(".nbspClass");
    
    parents.forEach((parent) => {
      if (parent) {
        parent.remove();
      }
    });

    if (nbspClasses) {
      nbspClasses.forEach((nbspClass) => {
        nbspClass.style["background-color"] = "";
      });
    }
    console.clear();
  }
  return;
}
