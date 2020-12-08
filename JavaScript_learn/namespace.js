var Wings = Wings || {};
Wings.Member = function(firstNme, lastName) {
    this.firstNme = firstNme;
    this.lastName = lastName;
};

Wings.Member.prototype = {
    getName : function() {
        return this.lastName + ' ' + this.firstNme;
    }
};

var mem = new Wings.Member('大樹', '澤田');
console.log(mem.getName());