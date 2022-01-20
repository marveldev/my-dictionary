import { useState } from 'react'
import { Form, Output, ThemeSwitcher } from './components'

const App = () => {
  const [definitions, setDefinitions] = useState([])
  const [darkTheme, setDarkTheme] = useState(true)
  const theme = darkTheme ? 'dark' : 'light'

  return (
    <div className={`${theme} app`}>
      <ThemeSwitcher darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <h1 className="text-center">WORD BOOK</h1>
      <Form setDefinitions={setDefinitions} darkTheme={darkTheme} />
      <Output definitions={definitions} />
    </div>
  )
}

export default App
