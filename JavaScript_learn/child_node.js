var s = document.getElementById('food');
var opts = s.childNodes;
for (var i = 0, len = opts.length; i < len; i++) {
    var child = s.firstChild;
    while (child) {
        if(child.nodeType === 1) {
            console.log(child.value);
        }
        child = child.nextSibling;
    }
}