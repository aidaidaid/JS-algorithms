function numToString(number) {
    let arr_numbers = [];
    arr_numbers[1] = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    arr_numbers[2] = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    arr_numbers[3] = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    function number_parser(num) {
        let $string = '';
        let num_hundred = '';
        if (num.length == 3) {
            num_hundred = num.substr(0, 1);
            num = num.substr(1, 3);
            $string = arr_numbers[3][num_hundred] + ' ';
        }
        if (num < 20) $string += arr_numbers[1][parseFloat(num)] + ' ';
        else {
            let first_num = num.substr(0, 1);
            let second_num = num.substr(1, 2);
            $string += arr_numbers[2][first_num] + ' ' + arr_numbers[1][second_num] + ' ';
        }
        $string = $string.replace('  ', ' ');
        return $string;
    }
    if (!number || number == 0) return false;
    if (typeof number !== 'number') {
        number = number.replace(',', '.');
        number = parseFloat(number);
        if (isNaN(number)) return false;
    }
    number = number.toFixed(2);
    if (number.indexOf('.') != -1) {
        let number_arr = number.split('.');
        let number = number_arr[0];
    }
    let number_length = number.length;
    let $string = '';
    let num_parser = '';
    let count = 0;
    for (let p = (number_length - 1); p >= 0; p--) {
        let num_digit = number.substr(p, 1);
        num_parser = num_digit + num_parser;
        if ((num_parser.length == 3 || p == 0) && !isNaN(parseFloat(num_parser))) {
            $string = number_parser(num_parser, count) + $string;
            num_parser = '';
            count++;
        }
    }
    $string = $string.charAt(0).toUpperCase() + $string.substr(1).toLowerCase();

    return $string;
}

// function numToString(n) {
//     let string = n.toString(),
//         units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
//     //let and = custom_join_character || 'and';
//     if (parseInt(string) === 0) {
//         return 'ноль';
//     }
//     units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестънадцать', 'семьнадцать', 'восемьнадцать', 'девятнадцать'];
//     tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
//     scales = ['', ]
//     /* Split user arguemnt into 3 digit chunks from right to left */
//     start = string.length;
//     chunks = [];
//     while (start > 0) {
//         end = start;
//         chunks.push(string.slice((start = Math.max(0, start - 3)), end));
//     }
//     /* Check if function has enough scale words to be able to stringify the user argument */
//     chunksLen = chunks.length;
//     if (chunksLen > scales.length) {
//         return '';
//     }
//     /* Stringify each integer in each chunk */
//     words = [];
//     for (i = 0; i < chunksLen; i++) {
//         chunk = parseInt(chunks[i]);
//         if (chunk) {
//             /* Split chunk into array of individual integers */
//             ints = chunks[i].split('').reverse().map(parseFloat);
//             /* If tens integer is 1, i.e. 10, then add 10 to units integer */
//             if (ints[1] === 1) {
//                 ints[0] += 10;
//             }
//             /* Add scale word if chunk is not zero and array item exists */
//             if ((word = scales[i])) {
//                 words.push(word);
//             }
//             /* Add unit word if array item exists */
//             if ((word = units[ints[0]])) {
//                 words.push(word);
//             }
//             /* Add tens word if array item exists */
//             if ((word = tens[ints[1]])) {
//                 words.push(word);
//             }
//             /* Add hundreds word if array item exists */
//             if ((word = units[ints[2]])) {
//                 words.push(word + ' сто');
//             }
//         }
//     }
//     return words.reverse().join(' ');
// }