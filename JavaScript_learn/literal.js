var Memver = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Memver.prototype.getName = function() {
    return this.lastName + ' ' + this.firstName;
};

Memver.prototype.toString = function() {
    return this.lastName + this.firstName;
};