function lineInfo(params) {
  // Localize line info
  var input = params.line;
  var cursor = params.cursor;

  // Break down the line
  var partialLeftLine = input.substr(input, cursor);
  var partialRightLine = input.substr(cursor);

  // Return info
}

module.exports = lineInfo;