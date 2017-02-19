# try.js

![Build status](https://travis-ci.org/fernahh/try.js.svg?branch=master)

> JavaScript equivalent of [Rails `try()` method](http://api.rubyonrails.org/v4.2/classes/Object.html#method-i-try)

### Why?

When we want get a value of a determined path, sometimes some property is `undefined`, and this break the execution flux. This function returns `undefined` when a path is invalid. [Read more](http://api.rubyonrails.org/v4.2/classes/Object.html#method-i-try).

### Usage

#### Simple example:

```javascript
// without try.js
const obj = {}

obj.x.y // TypeError: Cannot read property 'y' of undefined

// to fix
const obj = {}

if (obj && obj.x && obj.x.y)
  return obj.x.y // undefined

// with try.js
const obj = {}

tryjs(obj, 'y.x') // undefined
```

#### With function:

```javascript
// without try.js
const obj = {
  sayHello: () => 'Hello'
}

if (obj && (typeof obj.sayHello === 'function')
  return obj.sayHello() // 'Hello'

// with try.js
const obj = {
  sayHello: () => 'Hello'
}

tryjs(obj, 'sayHello') // 'Hello'
```

#### Function with params:

```javascript
const obj = {
  add: (x, y) => x + y
}

tryjs(obj, 'add', [1, 2]) // 3
```

## Install

```bash
npm install try.js
```

Or [download the dist file](https://github.com/fernahh/try.js/blob/master/dist/try.min.js).

## Alternatives
- [Lodash `_.get()`](https://lodash.com/docs/4.17.4#get)
- [Ramda `R.prop()`](http://ramdajs.com/docs/#prop)
- [safe-chain.js](https://github.com/caiogondim/safe-chain.js)

MIT © [@fernahh](http://fernahh.com.br)
