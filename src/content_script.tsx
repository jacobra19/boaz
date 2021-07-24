import lodash from 'lodash';

chrome.runtime.onConnect.addListener(port => {
    console.log('port :>> ', port);
})

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    const script2 = document.createElement('script');
    script2.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
    document.documentElement.appendChild(script2);

    
    // import('lodash').then(lodash => {
    //     console.log('lodash :>> ', lodash);
    //     // @ts-ignore
        
    // }).catch(err => {
    //     console.log(err);
    // });

	if (msg.color) {
		console.log('Receive color = ' + msg.color);
		document.body.style.backgroundColor = msg.color;
		sendResponse('Change color to ' + msg.color);
	} else {
		sendResponse('Color message is none.');
	}
});

// (function () {
// 	function script() {
// 		// your main code here
// 		// @ts-ignore
// 		window['foo'] = 'bar';
// 		// @ts-ignore
// 		import('lodash')
// 			.then((lodash) => {
// 				// @ts-ignore
// 				window['lodash'] = lodash;
// 			})
// 			.catch((err) => {
// 				console.error(err);
// 			});
// 	}
// 	// @ts-ignore
// 	function inject(fn) {
//         let lodashCDN = '<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>'
// 		const script = document.createElement('script');
// 		const script2 = document.createElement('script');
// 		script.text = `(${fn.toString()})();`;
//         script2.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
// 		document.documentElement.appendChild(script);
// 		document.documentElement.appendChild(script2);
// 	}

// 	inject(script);
// })();
