function numToString(num) {
    units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    dozens1 = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    dozens2 = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let myNum = num.toString();

    if (myNum.length == 3) {
        if (myNum[1] == '1') {
            myNum = hundreds[myNum[0]] + ' ' + dozens1[myNum[2]];
        } else if (myNum[1] == '0') {
            myNum = hundreds[myNum[0]] + ' ' + units[myNum[2]];
        } else {
            myNum = hundreds[myNum[0]] + ' ' + dozens2[myNum[1]] + ' ' + units[myNum[2]];
        }
    } else if (myNum.length == 2) {
        if (num < 10) {
            myNum = units[num];
        } else if (num <= 20) {
            myNum = dozens1[myNum[1]];
        } else {
            myNum = dozens2[myNum[0]] + ' ' + units[myNum[1]];
        }
    } else if (myNum.length == 1) {
        myNum = units[myNum[0]];
    }

    return myNum.charAt(0).toUpperCase() + myNum.slice(1);
}