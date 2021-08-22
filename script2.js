function numToString(_number) {
    var _arr_numbers = new Array();
    _arr_numbers[1] = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    _arr_numbers[2] = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    _arr_numbers[3] = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    function number_parser(_num) {
        var _string = '';
        var _num_hundred = '';
        if (_num.length == 3) {
            _num_hundred = _num.substr(0, 1);
            _num = _num.substr(1, 3);
            _string = _arr_numbers[3][_num_hundred] + ' ';
        }
        if (_num < 20) _string += _arr_numbers[1][parseFloat(_num)] + ' ';
        else {
            var _first_num = _num.substr(0, 1);
            var _second_num = _num.substr(1, 2);
            _string += _arr_numbers[2][_first_num] + ' ' + _arr_numbers[1][_second_num] + ' ';
        }
        _string = _string.replace('  ', ' ');
        return _string;
    }
    if (!_number || _number == 0) return false;
    if (typeof _number !== 'number') {
        _number = _number.replace(',', '.');
        _number = parseFloat(_number);
        if (isNaN(_number)) return false;
    }
    _number = _number.toFixed(2);
    if (_number.indexOf('.') != -1) {
        var _number_arr = _number.split('.');
        var _number = _number_arr[0];
        var _number_decimals = _number_arr[1];
    }
    var _number_length = _number.length;
    var _string = '';
    var _num_parser = '';
    var _count = 0;
    for (var _p = (_number_length - 1); _p >= 0; _p--) {
        var _num_digit = _number.substr(_p, 1);
        _num_parser = _num_digit + _num_parser;
        if ((_num_parser.length == 3 || _p == 0) && !isNaN(parseFloat(_num_parser))) {
            _string = number_parser(_num_parser, _count) + _string;
            _num_parser = '';
            _count++;
        }
    }
    return _string;
}


// l1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
//     'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//     'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', ''
// ]
// l2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
//     'eighty', 'ninety'
// ]


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