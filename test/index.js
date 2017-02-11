const tap = require('tap')
const tryjs = require('../src/')

tap.test('object is undefined', test => {
  const output = tryjs(undefined, 'x')

  test.assert(output === undefined)
  test.end()
})

tap.test('object is defined and prop undefined', test => {
  const output = tryjs({}, 'x')

  test.assert(output === undefined)
  test.end()
})

tap.test('object and prop are defined', test => {
  const obj = {
    x: 'y'
  }
  const output = tryjs(obj, 'x')

  test.assert(output === 'y')
  test.end()
})

tap.test('object and prop with child', test => {
  const obj = {
    x: {
      y: {
        z: 'xyz'
      }
    }
  }
  const output = tryjs(obj, 'x.y.z')

  test.assert(output === 'xyz')
  test.end()
})

tap.test('object and prop with child undefined', test => {
  const obj = {
    x: {
      y: {}
    }
  }
  const output = tryjs(obj, 'x.y.z')

  test.assert(output === undefined)
  test.end()
})

tap.test('object with method', test => {
  const obj = {
    sayHello: () => 'Hello'
  }
  const output = tryjs(obj, 'sayHello')

  test.assert(output === 'Hello')
  test.end()
})

tap.test('object with method and params', test => {
  const obj = {
    add: (a, b) => a + b
  }
  const output = tryjs(obj, 'add', [1, 2])

  test.assert(output === 3)
  test.end()
})

tap.test('object with method that return error', test => {
  const obj = {
    sayHello: (person) => `Say Hello, ${person.name}`
  }
  const output = tryjs(obj, 'sayHello', [undefined])

  test.assert(output === undefined)
  test.end()
})

tap.test('object with method and object as param', test => {
  const obj = {
    sayHello: (person) => `Say Hello, ${person.name}`
  }
  const output = tryjs(obj, 'sayHello', [{ name: 'John' }])

  test.assert(output === 'Say Hello, John')
  test.end()
})
