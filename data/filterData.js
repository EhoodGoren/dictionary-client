const data = require('../data/dictionary.json');

const noDoubles = data.filter((record, index) => {
    const { word, part_of_speech } = record;
    if(index === data.length - 1) return true
    const { word: nextWord, part_of_speech: nextPart } = data[index + 1];
    return (word !== nextWord || part_of_speech !== nextPart);
});

module.exports = noDoubles;
