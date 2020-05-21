/**
 * Give names to DEFAULT EXPORTS (they are anonymous ) as we IMPORT
 * These are just FUNCTIONS,
 * not OBJECTS - no DESTRUCTURING
 */

import THead from './THead'
import TBody from './TBody'

/**
 * Whenever this FUNCTIONAL COMPONENT is INVOKED,
 * it will INVOKE the FUNCTIONAL COMPONENTS that it needs.
 *
 * All of that HTML will be RETURNed and will end up inside '#root'
 */
export default () => `
  <table>
    ${THead()}
    ${TBody()}
  </table
`
