import { useState } from 'react'
import './App.css'
import Caja from './components/atoms/caja'


import { Provider } from "./components/ui/provider"

function App({ Component, pageProps}) {

  return (
    <Provider>
      <Caja/>
    </Provider>
  )
}

export default App;