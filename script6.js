function firstRepeat(word) {
    for (let i = 0; i < word.length - 1; i++) {
        if (word.indexOf(word[i], i + 1) > -1) {
            return word[i];
        }
    }
    return -1;
}