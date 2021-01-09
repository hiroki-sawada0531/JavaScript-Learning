window.addEventListener('storage', function(e) {
    console.log('変更されたキー:' + e.key);
    console.log('変更後の値:' + e.oldValue);
    console.log('発生元ページ:' + e.url);
}, false);