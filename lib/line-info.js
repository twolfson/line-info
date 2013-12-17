function lineInfo(params) {
  // Localize line info
  var input = params.line;
  var cursor = params.cursor;

  // Break down the line
  var partialLeftLine = input.substr(input, cursor);
  var partialRightLine = input.substr(cursor);

  // Collect words info
  var wordDelimiter = lineInfo.wordDelimiter;
  var words = input.match(wordDelimiter);
  var partialLeftWords = partialLeftLine.match(wordDelimiter);
  var partialRightWords = partialRightLine.match(wordDelimiter);
  var wordsIndex = partialLeftWords.length - 1;

  // Collect word info
  var partialLeftWord = partialLeftWords[partialLeftWords.length - 1];
  var partialRightWord = partialRightWords[0];

  // Return info
  return {
    line: {
      value: input,
      index: cursor,
      partialLeft: partialLeftLine,
      partialRight: partialRightLine,
    },
    words: {
      value: words,
      index: wordsIndex,
      partialLeft: partialLeftWords,
      partialRight: partialRightWords
    },
    word: {
      value: words[wordsIndex],
      index: partialLeftWord.length,
      partialLeft: partialLeftWord,
      partialRight: partialRightWord
    }
  };
}
lineInfo.wordDelimiter = /\w+/g;

module.exports = lineInfo;