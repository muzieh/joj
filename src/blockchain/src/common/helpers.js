import { curry, concat } from 'ramda'
import Pair from '../behavior/util/Pair'

Array.prototype.split = curry(function(pred1, pred2) {
  return [this.filter(pred1), this.filter(pred2)]
})

Array.prototype.flatBiMap = curry(function(fn1, fn2) {
  const [first, ...second] = this
  return first.map(fn1).concat(second.reduce(concat).map(fn2))
})

// Checks string is not empty
export const notEmpty = str => () => str && str.length > 0

// Checks string is empty
export const isEmpty = str => () => !str || str.length === 0

export const checkInvariant = curry((name, checker, data) => {
  if (!checker(data)) {
    throw new Error(`Invalid argument. Please provide a valid for ${name}`)
  }
  return data
})

/**
 * Freeze an object (making it immutable) as well as any nested object
 * in this object's graph
 * @param {Object}  obj Object to freeze
 * @return {Object} Returns back same object with its attributes (writable) augmented
 */
export const deepFreeze = obj => {
  if (!Object.isFrozen(obj)) {
    // ES2015, we don't have to check whether attribute is object
    Object.keys(obj).forEach(name => deepFreeze(obj[name]))
    Object.freeze(obj)
  }
  return obj
}

// Insert polyfill
Object.deepFreeze = Object.deepFreeze || deepFreeze
