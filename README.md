# Pebble Screenshot Color Corrector

A browser extension for Google Chrome and Microsoft Edge that adjusts the colors of Pebble smartwatch screenshots on the [Repebble App Store](https://apps.repebble.com) to match their real-world appearance.

Pebble smartwatches use a color e-paper display that looks different depending on the ambient lighting. Developers usually upload screenshots using the "ideal" pure RGB color palette, which can look overly saturated on a computer monitor. This extension maps those ideal colors to real-world palettes derived from actual macro photos of the watch.

## Features
* **Multiple Lighting Modes** – Switch between Original, Sunlight, Room (Indoor), and Night (Backlight) color profiles.
* **Seamless Integration** – Automatically processes and recolors screenshots directly on `apps.repebble.com`.
* **Instant Reload** – Changing the mode in the extension popup automatically reloads the current tab to apply the new color palette.

## How to Install
Since this extension is not published on the Chrome Web Store, you can easily load it as an "unpacked" extension:

1. **Download the code:** Clone this repository or download it as a `.zip` file and extract it to a folder on your computer.
2. **Open Extensions page:** In Google Chrome, go to `chrome://extensions/` (or `edge://extensions/` in Microsoft Edge).
3. **Enable Developer Mode:** Turn on the "Developer mode" toggle switch, usually located in the top right corner.
4. **Load the extension:** Click the "Load unpacked" button in the top left corner.
5. **Select the folder:** Choose the folder you extracted in step 1 (the folder that contains the `manifest.json` file).

## How to Use
1. Visit the [Repebble App Store](https://apps.repebble.com).
2. Click on the extensions icon (the puzzle piece) in your browser toolbar and pin the **Pebble Color Corrector**.
3. Click the extension icon to open the popup.
4. Select your preferred lighting condition from the dropdown menu.
5. The page will reload automatically, and all app and watchface screenshots (not animated) will be displayed using realistic colors.

## How It Works (Technical Details)
The extension utilizes a background Service Worker to fetch the screenshot image data, successfully bypassing the strict CORS policies on the Rebble servers. The `content.js` script then draws the image on a hidden HTML `<canvas>`, compares every pixel against a predefined color mapping table (generated from real photos), applies the corresponding real-world color, and replaces the image source directly in the DOM.

## How It Was Created 
A simple app for Pebble displays all available colors.  
Photos of this app on my Pebble Time 2 were taken by me. Then in Photoshop by sampling average area of a displayed color I've created real world palettes by hand.
The rest was vibecoded with Gemini.
