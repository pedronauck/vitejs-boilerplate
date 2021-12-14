import { FC } from 'react'
import { ChakraProvider, localStorageManager } from '@chakra-ui/react'

import theme from '@/styles/theme'

const Chakra: FC<any> = ({ children }) => {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      {children}
    </ChakraProvider>
  )
}

export default Chakra
