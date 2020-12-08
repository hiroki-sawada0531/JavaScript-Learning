class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.lastName + this.firstName;
    }
}

let m = new Member('大樹', '澤田');
console.log(m.getName());