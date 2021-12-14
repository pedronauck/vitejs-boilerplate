import { css } from '@emotion/react'
import tw from 'twin.macro'

export const container = tw`
  max-w-6xl mx-auto xs:(px-6) sm:(px-14)
`

export const pseudoContent = (width?: string, height?: string) => css`
  ${tw`absolute block content['']`}
  width: ${width};
  height: ${height};
`
