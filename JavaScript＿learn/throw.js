var x = 1;
var y = 0;
try {
    if(y === 0) {
        throw new Error('0で徐算しようとしました。');
    }
    var z = x / y;
} catch(e) {
    console.log(e.message);
}
