const first = factory(15);

function factory(n) {
    return function first(arr) {
        return arr = arr.map((el) => el / n);
    }
}