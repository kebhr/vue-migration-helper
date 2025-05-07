'use strict'

const migrationGuideUrlFor = require('./migration-guide-url-for')

describe('Helper: migration-guide-url-for', () => {
  it('returns the main migration guide for vue', () => {
    expect(
      migrationGuideUrlFor('vue')
    ).toBe('https://v2.vuejs.org/v2/guide/migration')
  })

  it('returns a suffixed migration guide for companion libraries', () => {
    expect(
      migrationGuideUrlFor('vue-router')
    ).toBe('https://v2.vuejs.org/v2/guide/migration-vue-router')
    expect(
      migrationGuideUrlFor('vuex')
    ).toBe('https://v2.vuejs.org/v2/guide/migration-vuex')
  })
})
