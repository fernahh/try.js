const tryjs = (obj, prop, params) => {
  if (obj === undefined) {
    return undefined
  }

  if (typeof obj[prop] === 'function') {
    if (params) {
      try {
        prop = obj[prop].apply(obj, [].slice.call(params))
      } catch (err) {
        prop = undefined
      }
    } else {
      prop = obj[prop]()
    }

    return prop
  }

  try {
    prop = eval(`obj.${prop}`)
  } catch (err) {
    prop = undefined
  }

  return prop
}

module.exports = tryjs
