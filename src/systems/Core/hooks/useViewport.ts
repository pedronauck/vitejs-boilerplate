import * as R from 'ramda'
import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'

import breakpoints from '@/styles/breakpoints.json'

export type Viewports = {
  isXS: boolean
  isSM: boolean
  isMD: boolean
  isLG: boolean
  isXL: boolean
  is2XL: boolean
  lessXS: boolean
  lessSM: boolean
  lessMD: boolean
  lessLG: boolean
  lessXL: boolean
  less2XL: boolean
}

const INITIAL_VIEWPORT = {
  isXS: false,
  isSM: false,
  isMD: false,
  isLG: false,
  isXL: false,
  is2XL: false,
  lessXS: false,
  lessSM: false,
  lessMD: false,
  lessLG: false,
  lessXL: false,
  less2XL: false,
}

export function useViewport(): Viewports {
  const { width } = useWindowSize()
  const [viewport, setViewport] = useState<Viewports>(INITIAL_VIEWPORT)
  const entries = Object.entries(breakpoints)

  useEffect(() => {
    setViewport(
      entries.reduce((obj, [key, value]) => {
        return R.pipe(
          R.assoc(`is${key.toUpperCase()}`, width >= value),
          R.assoc(`less${key.toUpperCase()}`, width < value)
        )(obj)
      }, {}) as Viewports
    )
  }, [width])

  return viewport
}
