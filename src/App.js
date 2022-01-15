import { useState } from 'react'
import { Form, Output, ThemeSwitcher } from './components'

const App = () => {
  const [definitions, setDefinitions] = useState([])

  return (
    <div className="app">
      <ThemeSwitcher />
      <h1 className="text-center">WORD BOOK</h1>
      <Form setDefinitions={setDefinitions} />
      <Output definitions={definitions} />
    </div>
  )
}

export default App
