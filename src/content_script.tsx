const addScript = (cdn:string) => {
    const script = document.createElement('script');
    script.src = cdn
    document.documentElement.appendChild(script);
}


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if( msg?.CDNs ) {
        msg.CDNs.map(addScript)
        sendResponse({response: `add ${msg.CDNs.length} scripts`})
    } else sendResponse({response: 'no scripts were added'})

})