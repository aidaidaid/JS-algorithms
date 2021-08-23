function numToString(num) {
    units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    dozens1 = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    dozens2 = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let myNum = num.toString();

    if (myNum.length == 3) {
        if (myNum[1] == '1') {
            string1 = hundreds[myNum[0]];
            string2 = dozens1[myNum[2]];
            myNum = string1 + ' ' + string2;
        } else if (myNum[1] == '0') {
            string1 = hundreds[myNum[0]];
            string2 = units[myNum[2]];
            myNum = string1 + ' ' + string2;
        } else {
            string1 = hundreds[myNum[0]];
            string2 = dozens2[myNum[1]];
            string3 = units[myNum[2]];
            myNum = string1 + ' ' + string2 + ' ' + string3;
        }
    } else if (myNum.length == 2) {
        if (num < 10) {
            myNum = units[num];
        } else if (num <= 20) {
            myNum = dozens1[myNum[1]];
        } else {
            string1 = dozens2[myNum[0]];
            string2 = units[myNum[1]];
            myNum = string1 + ' ' + string2;
        }
    } else if (myNum.length == 1) {
        string1 = units[myNum[0]];
        myNum = string1;
    }

    return myNum.charAt(0).toUpperCase() + myNum.slice(1);
}