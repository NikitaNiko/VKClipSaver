const script = document.createElement('script');
script.charset = 'utf-8';
script.type = 'text/javascript';
script.src = chrome.runtime.getURL('injection.js');
document.querySelector('body').appendChild(script);
