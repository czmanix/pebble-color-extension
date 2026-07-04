document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('palette-select');

    // Načtení uložené volby při otevření
    chrome.storage.local.get(['activePalette'], (result) => {
        if (result.activePalette) {
            select.value = result.activePalette;
        }
    });

    // Uložení a reload stránky při změně
    select.addEventListener('change', (e) => {
        const mode = e.target.value;
        
        // Uložíme volbu a hned poté obnovíme aktuální záložku
        chrome.storage.local.set({ activePalette: mode }, () => {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                if (tabs[0]) {
                    chrome.tabs.reload(tabs[0].id);
                }
            });
        });
    });
});