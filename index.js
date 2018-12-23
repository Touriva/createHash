var _createHash = require('crypto').createHash
var getHashes = require('crypto').getHashes
var rmd160 = require('ripemd160')

function createHash(algo) {
  if ((algo === 'rmd160' || algo === 'ripemd160') && getHashes().indexOf('rmd160') === -1) {
    return new rmd160()
  } else {
    return _createHash(algo)
  }
}

module.exports = createHash