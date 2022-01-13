import { useState } from 'react'
import { Form, SearchOutput, ThemeSwitcher } from './components'

const App = () => {
  const [definitions, setDefinitions] = useState()

  return (
    <div className="app">
      <ThemeSwitcher />
      <h1>WORD BOOK</h1>
      <Form setDefinitions={setDefinitions} />
      <SearchOutput definitions={definitions} setDefinitions={setDefinitions} />
    </div>
  )
}

export default App
