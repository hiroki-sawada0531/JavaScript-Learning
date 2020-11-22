var dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString());
dat.setMonth(dat.getMonth() + 1);
console.log(dat.toLocaleDateString());