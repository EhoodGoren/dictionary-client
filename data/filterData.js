const data = require('../data/dictionary.json');

const sortedData = data.sort((a, b) => {
    const wordA = a.word.toUpperCase();
    const wordB = b.word.toUpperCase();
    if (wordA < wordB) {
        return -1;
    }
    if (wordA > wordB) {
        return 1;
    }
    const partA = a.part_of_speech.toUpperCase();
    const partB = b.part_of_speech.toUpperCase();
    if (partA < partB) {
        return -1;
    }
    if (partA > partB) {
        return 1;
    }
    return 0;
});

const noDoubles = sortedData.filter((record, index) => {
    const { word, part_of_speech } = record;
    if(index === data.length - 1) return true
    const { word: nextWord, part_of_speech: nextPart } = data[index + 1];
    return (word !== nextWord || part_of_speech !== nextPart);
});

module.exports = noDoubles;
