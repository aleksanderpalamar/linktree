import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import { theme } from './styles/theme'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <Footer />
    </ChakraProvider>    
  </React.StrictMode>
)
