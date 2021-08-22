function findCoords(x1, y1, x2, y2) { //уточни задание параметров
    let a = x1 - x2;
    let b = y1 - y2;
    return Math.sqrt(a * a + b * b);
}