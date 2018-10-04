// Function combinators
export const identity = a => a
export const isFunction = a => a && typeof a === 'function'
export const compose2 = (f, g) => (...args) => f(g(...args))
export const compose = (...fns) => fns.reduce(compose2)
export const pipe = (...fns) => fns.reduceRight(compose2)
export const curry = fn => (...args1) =>
  (args1.length === fn.length
    ? fn(...args1)
    : (...args2) => {
      const args = [...args1, ...args2]
      return args.length >= fn.length ? fn(...args) : curry(fn)(...args)
    })

// ADT helpers
export const map = curry((f, M) => M.map(f))
export const composeM2 = (f, g) => (...args) => g(...args).flatMap(f)
export const composeM = (...Ms) => Ms.reduce(composeM2)
export const flatMap = curry((f, M) => M.flatMap(f))
export const fold = curry((f, M) => M.fold(f))
export const getOrElseThrow = curry((e, M) => M.getOrElseThrow(e))

export default {
  identity,
  isFunction,
  compose,
  compose2,
  composeM2,
  composeM,
  pipe,
  curry,
  map,
  flatMap,
  fold,
  getOrElseThrow
}
