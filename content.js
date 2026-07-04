// Zde si časem doplníš své kompletní vygenerované palety.
// Struktura je: { ideal: [r,g,b], real: [r,g,b] }
const palettes = {
    sun: [
    { ideal: [0, 0, 0], real: [39, 32, 32] },
    { ideal: [0, 0, 85], real: [38, 52, 74] },
    { ideal: [0, 0, 170], real: [27, 65, 104] },
    { ideal: [85, 0, 0], real: [91, 36, 35] },
    { ideal: [0, 0, 255], real: [3, 72, 122] },
    { ideal: [85, 0, 85], real: [88, 52, 71] },
    { ideal: [85, 0, 170], real: [86, 69, 99] },
    { ideal: [0, 85, 0], real: [63, 73, 50] },
    { ideal: [170, 0, 85], real: [136, 63, 81] },
    { ideal: [0, 85, 170], real: [62, 108, 128] },
    { ideal: [170, 0, 170], real: [136, 80, 112] },
    { ideal: [85, 85, 0], real: [108, 82, 62] },
    { ideal: [255, 0, 0], real: [158, 45, 50] },
    { ideal: [0, 85, 255], real: [45, 112, 141] },
    { ideal: [170, 0, 255], real: [131, 89, 128] },
    { ideal: [85, 85, 85], real: [103, 91, 90] },
    { ideal: [0, 170, 0], real: [87, 109, 69] },
    { ideal: [170, 85, 0], real: [155, 95, 79] },
    { ideal: [85, 85, 255], real: [108, 117, 140] },
    { ideal: [255, 0, 255], real: [163, 95, 132] },
    { ideal: [0, 170, 85], real: [82, 123, 105] },
    { ideal: [170, 85, 85], real: [146, 99, 97] },
    { ideal: [0, 170, 170], real: [83, 132, 134] },
    { ideal: [170, 85, 170], real: [141, 107, 118] },
    { ideal: [170, 85, 255], real: [149, 123, 142] },
    { ideal: [85, 170, 85], real: [128, 130, 113] },
    { ideal: [255, 85, 85], real: [169, 104, 103] },
    { ideal: [85, 170, 170], real: [122, 138, 138] },
    { ideal: [255, 85, 170], real: [174, 111, 124] },
    { ideal: [0, 255, 0], real: [97, 134, 91] },
    { ideal: [170, 170, 0], real: [157, 121, 92] },
    { ideal: [85, 170, 255], real: [114, 136, 148] },
    { ideal: [0, 255, 170], real: [95, 154, 143] },
    { ideal: [170, 170, 170], real: [151, 141, 136] },
    { ideal: [85, 255, 0], real: [139, 144, 107] },
    { ideal: [255, 170, 0], real: [186, 130, 100] },
    { ideal: [0, 255, 255], real: [101, 163, 162] },
    { ideal: [170, 170, 255], real: [151, 141, 136] },
    { ideal: [85, 255, 85], real: [131, 141, 122] },
    { ideal: [255, 170, 85], real: [181, 135, 117] },
    { ideal: [85, 255, 255], real: [137, 163, 158] },
    { ideal: [255, 170, 255], real: [184, 157, 148] },
    { ideal: [170, 255, 85], real: [162, 139, 119] },
    { ideal: [170, 255, 170], real: [167, 164, 155] },
    { ideal: [255, 255, 0], real: [194, 151, 116] },
    { ideal: [170, 255, 255], real: [167, 164, 155] },
    { ideal: [255, 255, 85], real: [185, 154, 131] },
    { ideal: [255, 255, 170], real: [184, 157, 148] },
    { ideal: [170, 255, 0], real: [175, 145, 107] },
    { ideal: [170, 170, 85], real: [162, 139, 119] },
    { ideal: [255, 255, 255], real: [188, 169, 166] },
    { ideal: [85, 255, 170], real: [133, 155, 141] },
    { ideal: [255, 85, 255], real: [170, 124, 145] },
    { ideal: [85, 170, 0], real: [126, 117, 84] },
    { ideal: [255, 0, 85], real: [158, 66, 83] },
    { ideal: [170, 0, 0], real: [128, 40, 44] },
    { ideal: [0, 170, 255], real: [79, 142, 155] },
    { ideal: [255, 0, 170], real: [164, 86, 117] },
    { ideal: [0, 85, 85], real: [65, 93, 96] },
    { ideal: [255, 170, 170], real: [182, 145, 141] },
    { ideal: [0, 255, 85], real: [98, 145, 120] },
    { ideal: [255, 85, 0], real: [174, 91, 75] },
    { ideal: [85, 85, 170], real: [107, 107, 120] },
    { ideal: [85, 0, 255], real: [85, 83, 125] }
],
    room: [
    { ideal: [0, 0, 0], real: [20, 19, 24] },
    { ideal: [0, 0, 85], real: [23, 28, 40] },
    { ideal: [0, 0, 170], real: [23, 33, 54] },
    { ideal: [85, 0, 0], real: [39, 25, 30] },
    { ideal: [0, 0, 255], real: [19, 40, 64] },
    { ideal: [85, 0, 85], real: [47, 30, 39] },
    { ideal: [85, 0, 170], real: [40, 38, 57] },
    { ideal: [0, 85, 0], real: [30, 37, 40] },
    { ideal: [170, 0, 85], real: [60, 42, 56] },
    { ideal: [0, 85, 170], real: [35, 52, 64] },
    { ideal: [170, 0, 170], real: [60, 42, 56] },
    { ideal: [85, 85, 0], real: [51, 45, 40] },
    { ideal: [255, 0, 0], real: [74, 37, 40] },
    { ideal: [0, 85, 255], real: [33, 56, 73] },
    { ideal: [170, 0, 255], real: [59, 48, 68] },
    { ideal: [85, 85, 85], real: [48, 48, 48] },
    { ideal: [0, 170, 0], real: [43, 56, 46] },
    { ideal: [170, 85, 0], real: [69, 50, 47] },
    { ideal: [85, 85, 255], real: [55, 62, 77] },
    { ideal: [255, 0, 255], real: [74, 53, 74] },
    { ideal: [0, 170, 85], real: [43, 58, 56] },
    { ideal: [170, 85, 85], real: [66, 52, 57] },
    { ideal: [0, 170, 170], real: [44, 64, 67] },
    { ideal: [170, 85, 170], real: [65, 56, 64] },
    { ideal: [170, 85, 255], real: [68, 63, 78] },
    { ideal: [85, 170, 85], real: [62, 64, 61] },
    { ideal: [255, 85, 85], real: [82, 58, 61] },
    { ideal: [85, 170, 170], real: [62, 67, 71] },
    { ideal: [255, 85, 170], real: [79, 60, 71] },
    { ideal: [0, 255, 0], real: [52, 67, 52] },
    { ideal: [170, 170, 0], real: [73, 62, 54] },
    { ideal: [85, 170, 255], real: [58, 69, 78] },
    { ideal: [0, 255, 170], real: [54, 79, 77] },
    { ideal: [170, 170, 170], real: [74, 72, 75] },
    { ideal: [85, 255, 0], real: [68, 72, 56] },
    { ideal: [255, 170, 0], real: [88, 64, 58] },
    { ideal: [0, 255, 255], real: [48, 80, 84] },
    { ideal: [170, 170, 255], real: [74, 72, 78] },
    { ideal: [85, 255, 85], real: [66, 72, 64] },
    { ideal: [255, 170, 85], real: [84, 66, 64] },
    { ideal: [85, 255, 255], real: [68, 82, 87] },
    { ideal: [255, 170, 255], real: [86, 77, 85] },
    { ideal: [170, 255, 85], real: [81, 77, 70] },
    { ideal: [170, 255, 170], real: [80, 79, 77] },
    { ideal: [255, 255, 0], real: [91, 76, 68] },
    { ideal: [170, 255, 255], real: [79, 84, 88] },
    { ideal: [255, 255, 85], real: [91, 76, 68] },
    { ideal: [255, 255, 170], real: [90, 80, 78] },
    { ideal: [170, 255, 0], real: [79, 74, 61] },
    { ideal: [170, 170, 85], real: [72, 66, 63] },
    { ideal: [255, 255, 255], real: [91, 86, 87] },
    { ideal: [85, 255, 170], real: [67, 78, 73] },
    { ideal: [255, 85, 255], real: [75, 63, 75] },
    { ideal: [85, 170, 0], real: [57, 54, 47] },
    { ideal: [255, 0, 85], real: [68, 41, 57] },
    { ideal: [170, 0, 0], real: [47, 30, 39] },
    { ideal: [0, 170, 255], real: [42, 66, 76] },
    { ideal: [255, 0, 170], real: [68, 41, 57] },
    { ideal: [0, 85, 85], real: [30, 37, 40] },
    { ideal: [255, 170, 170], real: [82, 69, 73] },
    { ideal: [0, 255, 85], real: [49, 69, 61] },
    { ideal: [255, 85, 0], real: [74, 49, 46] },
    { ideal: [85, 85, 170], real: [50, 50, 59] },
    { ideal: [85, 0, 255], real: [40, 38, 57] }
],
    night: [
    { ideal: [0, 0, 0], real: [52, 68, 116] },
    { ideal: [0, 0, 85], real: [46, 103, 163] },
    { ideal: [0, 0, 170], real: [43, 125, 189] },
    { ideal: [85, 0, 0], real: [115, 88, 139] },
    { ideal: [0, 0, 255], real: [37, 137, 200] },
    { ideal: [85, 0, 85], real: [112, 123, 182] },
    { ideal: [85, 0, 170], real: [104, 136, 196] },
    { ideal: [0, 85, 0], real: [80, 117, 152] },
    { ideal: [170, 0, 85], real: [140, 129, 188] },
    { ideal: [0, 85, 170], real: [75, 156, 209] },
    { ideal: [170, 0, 170], real: [138, 150, 216] },
    { ideal: [85, 85, 0], real: [140, 135, 175] },
    { ideal: [255, 0, 0], real: [164, 111, 159] },
    { ideal: [0, 85, 255], real: [75, 168, 221] },
    { ideal: [170, 0, 255], real: [138, 159, 222] },
    { ideal: [85, 85, 85], real: [133, 157, 208] },
    { ideal: [0, 170, 0], real: [100, 143, 177] },
    { ideal: [170, 85, 0], real: [150, 134, 181] },
    { ideal: [85, 85, 255], real: [130, 176, 234] },
    { ideal: [255, 0, 255], real: [160, 165, 231] },
    { ideal: [0, 170, 85], real: [105, 164, 202] },
    { ideal: [170, 85, 85], real: [151, 160, 210] },
    { ideal: [0, 170, 170], real: [94, 179, 222] },
    { ideal: [170, 85, 170], real: [144, 170, 224] },
    { ideal: [170, 85, 255], real: [143, 180, 238] },
    { ideal: [85, 170, 85], real: [133, 171, 218] },
    { ideal: [255, 85, 85], real: [173, 168, 222] },
    { ideal: [85, 170, 170], real: [140, 184, 232] },
    { ideal: [255, 85, 170], real: [175, 176, 229] },
    { ideal: [0, 255, 0], real: [110, 156, 181] },
    { ideal: [170, 170, 0], real: [174, 163, 197] },
    { ideal: [85, 170, 255], real: [133, 190, 234] },
    { ideal: [0, 255, 170], real: [101, 186, 227] },
    { ideal: [170, 170, 170], real: [160, 195, 243] },
    { ideal: [85, 255, 0], real: [152, 170, 201] },
    { ideal: [255, 170, 0], real: [195, 165, 205] },
    { ideal: [0, 255, 255], real: [116, 196, 238] },
    { ideal: [170, 170, 255], real: [168, 198, 243] },
    { ideal: [85, 255, 85], real: [147, 183, 218] },
    { ideal: [255, 170, 85], real: [179, 179, 219] },
    { ideal: [85, 255, 255], real: [138, 201, 245] },
    { ideal: [255, 170, 255], real: [168, 202, 248] },
    { ideal: [170, 255, 85], real: [170, 186, 227] },
    { ideal: [170, 255, 170], real: [179, 200, 247] },
    { ideal: [255, 255, 0], real: [206, 177, 209] },
    { ideal: [170, 255, 255], real: [172, 206, 246] },
    { ideal: [255, 255, 85], real: [182, 189, 232] },
    { ideal: [255, 255, 170], real: [185, 202, 239] },
    { ideal: [170, 255, 0], real: [168, 171, 205] },
    { ideal: [170, 170, 85], real: [155, 172, 219] },
    { ideal: [255, 255, 255], real: [179, 210, 250] },
    { ideal: [85, 255, 170], real: [152, 189, 232] },
    { ideal: [255, 85, 255], real: [173, 180, 234] },
    { ideal: [85, 170, 0], real: [136, 145, 177] },
    { ideal: [255, 0, 85], real: [150, 134, 181] },
    { ideal: [170, 0, 0], real: [128, 95, 139] },
    { ideal: [0, 170, 255], real: [83, 175, 228] },
    { ideal: [255, 0, 170], real: [140, 146, 209] },
    { ideal: [0, 85, 85], real: [66, 133, 181] },
    { ideal: [255, 170, 170], real: [182, 189, 232] },
    { ideal: [0, 255, 85], real: [105, 164, 202] },
    { ideal: [255, 85, 0], real: [171, 140, 174] },
    { ideal: [85, 85, 170], real: [118, 153, 200] },
    { ideal: [85, 0, 255], real: [104, 136, 196] }
]
};


let currentMode = 'off';

// Funkce pro nahrazení barev komunikující s background.js
function applyPalette(imgElement) {
    if (currentMode === 'off') {
        if (imgElement.dataset.originalSrc) {
            imgElement.src = imgElement.dataset.originalSrc;
        }
        return;
    }

    if (!imgElement.dataset.originalSrc) {
        imgElement.dataset.originalSrc = imgElement.src;
    }

    const colorMap = palettes[currentMode];
    if (!colorMap || colorMap.length === 0) return;

    // Zašleme zprávu background skriptu, aby obrázek stáhl za nás
    chrome.runtime.sendMessage({ action: 'fetchImage', url: imgElement.dataset.originalSrc }, (response) => {
        if (response && response.dataUrl) {
            const tempImg = new Image();
            tempImg.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = tempImg.width;
                canvas.height = tempImg.height;
                const ctx = canvas.getContext('2d', { willReadFrequently: true });
                ctx.drawImage(tempImg, 0, 0);

                const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imgData.data;

                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i], g = data[i+1], b = data[i+2];
                    if (data[i+3] === 0) continue; 

                    let minDist = Infinity;
                    let match = null;
                    for (const map of colorMap) {
                        const dist = Math.pow(r - map.ideal[0], 2) + 
                                     Math.pow(g - map.ideal[1], 2) + 
                                     Math.pow(b - map.ideal[2], 2);
                        if (dist < minDist) {
                            minDist = dist;
                            match = map.real;
                        }
                    }
                    
                    if (match) {
                        data[i] = match[0];
                        data[i+1] = match[1];
                        data[i+2] = match[2];
                    }
                }
                
                ctx.putImageData(imgData, 0, 0);
                imgElement.src = canvas.toDataURL();
            };
            // Teď už je zdrojem base64 text, CORS se neaktivuje
            tempImg.src = response.dataUrl; 
        }
    });
}

// Zkontroluje jeden obrázek, jestli je to screenshot a aplikuje filtry
function checkAndProcessImage(img) {
    const isScreenshot = img.src.includes('assets.repebble.com/screenshots/') || img.dataset.originalSrc;
    const isAlreadyProcessed = img.src.startsWith('data:image/png;base64');

    if (isScreenshot && !isAlreadyProcessed) {
        if (!img.complete || img.naturalWidth === 0) {
            img.addEventListener('load', () => applyPalette(img), { once: true });
        } else {
            applyPalette(img);
        }
    }
}

// Projde všechny aktuální obrázky na stránce
function processAllImages() {
    document.querySelectorAll('img').forEach(checkAndProcessImage);
}

// Naslouchání zprávám z popupu
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateColors") {
        currentMode = request.mode;
        processAllImages();
    }
});

// Zjištění stavu při načtení a zapnutí sledování změn
chrome.storage.local.get(['activePalette'], (result) => {
    currentMode = result.activePalette || 'off';
    
    processAllImages();

    const observer = new MutationObserver((mutations) => {
        if (currentMode === 'off') return;
        
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.tagName === 'IMG') {
                    checkAndProcessImage(node);
                } else if (node.querySelectorAll) {
                    node.querySelectorAll('img').forEach(checkAndProcessImage);
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});