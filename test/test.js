
// load some binary code.
// trying to load a .wasm file hits a webpack error, support there is
// not stable yet, so avoid that for now

var wasm = require('binary-loader!./test.binary');

