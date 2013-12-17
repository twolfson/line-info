# line-info [![Build status](https://travis-ci.org/twolfson/line-info.png?branch=master)](https://travis-ci.org/twolfson/line-info)

Gather information about a line based on content and cursor position.

This was built as part of [commander-completion][], a shell completion library for [commander.js][].

[commander-completion]: https://github.com/twolfson/commander-completion
[commander.js]: https://github.com/visionmedia/commander.js

## Getting Started
Install the module with: `npm install line-info`

```javascript
var lineInfo = require('line-info');
lineInfo({
  // git checkout|world
  line: 'git checkoutworld',
  cursor: 12
});
/* Result is
{
  line: {
    value: 'git checkoutworld',
    index: 12,
    partialLeft: 'git checkout',
    partialRight: 'world'
  },
  words: {
    value: ['git', 'checkoutworld'],
    index: 1,
    partialLeft: ['git', 'checkout'],
    partialRight: ['world']
  },
  word: {
    value: 'checkoutworld',
    index: 8,
    partialLeft: 'checkout',
    partialRight: 'world'
  }
}
*/

// Accessed via `result.word.partialLeft`; // 'checkout'
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt) and test via `npm test`.

## Donating
Support this project and [others by twolfson][gittip] via [gittip][].

[![Support via Gittip][gittip-badge]][gittip]

[gittip-badge]: https://rawgithub.com/twolfson/gittip-badge/master/dist/gittip.png
[gittip]: https://www.gittip.com/twolfson/

## Unlicense
As of Dec 17 2013, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
