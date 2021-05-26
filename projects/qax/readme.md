# qaX

A Chrome extension that allows you to view alt, alias, URL, and target attributes of &#60;img> and &#60;a> tags, view tracking code, highlight "&#38;nbsp;" in paragraph and heading tags, and open all links with a click of a button on an HTML page.

## Description

This extension captures &#60;img> and &#60;a> tags and displays the alt, alias, URL, and target attributes on a Web page. It does so by injecting &#60;div>s with the specific content requested before each tag (and in some exceptions, inside the tag). It also searches for tracking code and displays the results as a fixed overlay at the top of the page. It captures &#60;p>, &#60;h1>, &#60;h2>, and &#60;h3> tags and highlights in yellow all instances of "&#38;nbsp;". Lastly, it captures all &#60;a> tags (from desktop and mobile views) and loads the href value in a new tab (regardless of the "target" value).

## Getting Started

If you have a previous version installed, please remove it completely before installing the new version. 

### Removing 

1. Type chrome://extensions in the address bar 
2. Find the extension and click "Remove"
3. Locate the folder on your hard drive and delete it 

### Installing

1. Download the zip file here
2. Extract all to a folder where you keep Chrome extensions
3. On Chrome's address bar, type chrome://extensions
4. On the top right, click the developer mode toggle to turn it on
5. On the top left, click on "Load unpacked"
6. Search for the extension folder that was created when you extracted the zip file
7. Select the folder and click "Select folder"
8. Click on the Extensions icon (it looks like a puzzle piece) next to the address bar
9. Click on the pin icon next to qaX and you're set!

### Executing extension

1. The extension will run once you click on the qaX icon in Chrome
2. It will save whatever you select after closing the extension
3. Select "Off" if you wish to not run anything when you click on or away from the extension

## Help

There are cases when elements are too close together and the overlay boxes overlap with each other. Because of this, the console will print the results of whatever attribute you want to view.

Also, sometimes a Web page may have "&#38;nbsp;" in &#60;span> tags that are not inside &#60;p> or heading tags. In this case, the extension will not highlight instances of "&#38;nbsp;".

Lastly, the "Open All Links" button will also grab links that are not visible to the user on the Web page. For example, if there is a media query targeting specific resolutions (for mobile phones, for example), and it has &#60;a> tags with href values, it will open these, as well.

### The Console

* To access the console on Windows, click Shift + CTRL + J; on macOS, Option + ⌘ + J
* You can also right-click on the mouse and select "Inspect"
* Then click on "Console" (located on the top bar in the Inspect window, usually next to "Elements," but these tabs can be moved around)

Once you're in the console, you can open the extension and select the attribute you want to see.

The console will print the selected attribute for either the &#60;img> or &#60;a> tag, in the order it appears in the HTML (from left to right, top to bottom).

If a number appears next to the text in the console, that means the same text has occurred more than once. The number seen is the number of times it occurs in a row. These are exact duplicates, so the console doesn't print them out more than once.

I suggest using the console when overlay boxes overlap with each other on the Web page.

### Minimum Requirements

Please ensure you have Chrome v85 or later, otherwise you will encounter issues, specifically with the tracking feature, that will break the extension.

## Campaigns and Programs Tested

* Lexus RTM
* Lexus Financial Services
* Mirai Launch
* Newsletter
* OCPe
* Off-Lease N-3.5
* Off-Lease N-8
* Owner Welcome 2.9
* Sales Conversion
* Sienna Launch
* SOD Regional
* SOD Seasonal
* Toyota Financial Services
* ToyotaCare

## Known Issues

There are currently no known issues.

For closed tickets and a description of fixes, please visit the extension's epic here:

https://rappus.atlassian.net/browse/INTQA-98

If you encounter any issue with the extension, please feel free to log a ticket there and assign it to me.

## Version History

* 3.0
    * Added Tracking (L) and NBSP checks
    * Added "Open All Links" feature
    * Redesigned the UI
    * Renamed the extension to qaX!
* 2.5
    * Added tracking check
    * Alias, URL, and target overlays now work when CSS is hiding and showing images
    * Text in overlays are no longer squished
    * Fixed padding on all overlays
    * Increased font size in all overlays
    * Increased opacity of all overlays
* 2.0
    * Code overhaul switching from displaying as many attributes as you want by clicking on checkboxes
    to only displaying one attribute at a time by selecting a radio button
    * Added print to console for all attributes
    * Supports &#60;img> and &#60;a> tags placed anywhere in the markup
* 1.0
    * Initial Release