'use strict'

module.exports = function (library) {
  if (library === 'vue') {
    return 'https://v2.vuejs.org/v2/guide/migration'
  } else {
    return 'https://v2.vuejs.org/v2/guide/migration-' + library
  }
}
