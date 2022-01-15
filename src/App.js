import { useState } from 'react'
import { Form, SearchOutput, ThemeSwitcher } from './components'

const App = () => {
  const [definitions, setDefinitions] = useState([])

  return (
    <div className="app">
      <ThemeSwitcher />
      <h1 className="text-center">WORD BOOK</h1>
      <Form setDefinitions={setDefinitions} />
      <SearchOutput definitions={definitions} />
    </div>
  )
}

export default App
