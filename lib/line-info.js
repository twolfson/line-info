function lineInfo(params) {
  // Localize line info
  var input = params.line;
  var cursor = params.cursor;

  // Break down the line
  var partialLeftLine = input.substr(input, cursor);
  var partialRightLine = input.substr(cursor);

  // Collect words info
  var wordDelimiter = lineInfo.wordDelimiter;
  var partialLeftWords = partialLeftLine.match(wordDelimiter);
  var partialRightWords = partialRightLine.match(wordDelimiter);

  // Return info
  return {
    line: {
      value: input,
      index: cursor,
      partialLeft: partialLeftLine,
      partialRight: partialRightLine,
    },
    words: {
      value: input.match(wordDelimiter),
      index: partialLeftWords.length - 1,
      partialLeft: partialLeftWords,
      partialRight: partialRightWords
    }
  };
}
lineInfo.wordDelimiter = /\w+/g;

module.exports = lineInfo;