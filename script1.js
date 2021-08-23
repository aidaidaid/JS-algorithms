const arr = [5, 11, 2, 8, 1];

function adn(arr, type) {
    const newArr = [...arr];

    if (type == 'Asc') {
        newArr.sort((a, b) => a - b);
        return newArr;
    } else if (type == 'Desc') {
        newArr.sort((a, b) => b - a);
        return newArr;
    } else if (type == 'None') {
        return newArr;
    }
}