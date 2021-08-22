arr1 = [1, 5, 2];
arr2 = [4, 5, 2, 6]

function commonElements(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    return arr1.filter(x => arr2.includes(x));
}