/// <reference types="vite/client" />

declare module 'tailwindcss/colors'
declare module 'ramda'

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_URL: string
}
