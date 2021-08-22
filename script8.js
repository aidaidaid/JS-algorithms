const first = factory(15); //замыкание
const arr = [30, 45, 60];

function factory(n) {
    return function first(arr) {
        return arr = arr.map(function (el) {
            return el / n;
        });
    }
}
console.log(first(arr));