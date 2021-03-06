const compose2 = (f, g) => (...args) => f(g(...args))
const compose = (...fns) => fns.reduce(compose2)
const pipe = (...fns) => fns.reduceRight(compose2)

const curry = fn => (...args1) =>
  args1.length === fn.length
    ? fn(...args1)
    : (...args2) => {
        const args = [...args1, ...args2]
        return args.length >= fn.length ? fn(...args) : curry(fn)(...args)
      }

export { curry, pipe, compose }
