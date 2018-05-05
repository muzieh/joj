/**
 * Unit 3 Currying
 *
 * @author Luis Atencio
 */
print('-------Beginning of unit 3-------')

//
// CURRY 2
//
const curry2 = f => a => b => f(a, b)
const raise = curry2((b, e) => b ** e)
const raiseTwo = raise(2)
print('Raise two to...', raiseTwo)
print('Raise two to the third.', raiseTwo(3))

//
// CURRY N
//
import { Combinators } from '../adt'
const { curry } = Combinators

print('-------End of unit 3-------')
