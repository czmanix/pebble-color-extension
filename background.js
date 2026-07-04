chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchImage') {
        fetch(request.url)
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = function() {
                    sendResponse({ dataUrl: reader.result });
                }
                reader.readAsDataURL(blob);
            })
            .catch(error => {
                console.error('Chyba při stahování obrázku na pozadí:', error);
                sendResponse({ error: error.toString() });
            });
            
        // Musíme vrátit true, aby Chrome věděl, že odpověď (sendResponse) přijde asynchronně
        return true; 
    }
});