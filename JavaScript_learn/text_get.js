document.addEventListener('DOMContetLoadead', function() {
    var list = document.getElementById('list');
    console.log(list.innerHTML);
    console.log(list.textContent);
},false);