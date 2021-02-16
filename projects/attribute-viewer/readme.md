# Attribute Viewer

A Chrome extension that allows you to view alt, alias, URL, and target attributes of &#60;img> and &#60;a> tags on a Web page.

## Description

This extension pulls in &#60;img> and &#60;a> tags (positioned anywhere in the markup) and displays the alt, alias, URL, and target attributes on the Web page. It does so by injecting a div inside another div as an element sibling before the tag.

## Getting Started

### Installing

* Download the zip file <a href="https://github.com/s-broy/s-broy.github.io/raw/master/projects/attribute-viewer/attribute-viewer.zip" target="_blank">here</a> (right-click and Save As)
* Extract all to a folder where you keep Chrome extensions
* On Chrome's address bar, type chrome://extensions
* On the top right, click the developer mode toggle to turn ito n
* Click on "Load unpacked"
* Search for thee xtension folder that was created when you extraced the zip file
* Select the folder and click "Select folder"
* Click on the Extensions icon next to the address bar
* Click on the pin icon next to Attribute Viewer
* The extension will run once you click on the icon

### Executing extension

* The extension will run once you click on the icon in Chrome
* It will save whatever you select after closing the extension
* Select "Off" if you wish to not run anything when you click on the extension

## Help

There are cases where elements are too close together and the overlay boxes overlap with each other. Because of this, the console will print the results of whatever attribute you want to view (even though I understand it's unusual to have anything print in the console on a release build).

## The Console

* Right-click on the mouse and select Inspect"
* Click "Console" (located on the top bar in the Inspect window, usually next to "Elements," but know that these tabs can be moved around)

Once you're in the console, you can open the extension and select the attribute you want to see.

The console will print the selected attribute for the either the &#60;img> and &#60;a> tag, as it appears in the HTML (from left to right, top to bottom).

If a number appears next to text in the console, that means that same text has occured more than once. The number seen is the number of times it occurs in a row. In short, these are exact duplicates, so the console doesn't print them out more than once.

**In short, I suggest using the console when overlay boxes overlap with each other on the Web page.**

## Known Issues

* The overlay boxes do not appear if the &#60;div>s are injected inside parent &#60;div>s with inline styling that hides child divs. This scenario may sometimes occur if the Web page is showing and hiding different images to create an animated effect (for example, showing different angles of a vehicle).
* The text in the overlay boxes appear squished and overlap one another when the &#60;div>s are injected inside parent &#60;div>s with styling that forces child &#60;div>s to be a specific width.

These issues are being worked on and potential solutions are being tested.

## Version History

* 2.0
    * Code overhaul switching from displaying as many attributes as you want by clicking on checkboxes
    to only displaying one attribute at a time by selecting a radio button
    * Added print to console for all attributes
    * Supports &#60;img> and &#60;a> tags placed anywhere in the markup
* 1.0
    * Initial Release