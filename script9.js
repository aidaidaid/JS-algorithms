function arrayOfMultiples(num, length) {
    const arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(num * i);
    }
    return arr;
}