import * as R from 'ramda'
import breakpoints from '@/styles/breakpoints.json'

export const mq = (min: string, max?: string) => {
  const minWidth = R.prop(min, breakpoints)
  const maxWidth = R.prop(max, breakpoints)
  const result =
    `@media (min-width: ${minWidth}px)` +
    (maxWidth ? `and (max-width: ${maxWidth}px)` : '')
  return result
}
