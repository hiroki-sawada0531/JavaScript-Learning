function circle(radius) {
    console.assert(typeof radius === 'number' && radius > 0,
    '引数radiusは整数でなければいけません。');
    return radius * radius * Math.PI;
}

console.log(circle(-5));