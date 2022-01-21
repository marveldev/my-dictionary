import { useState } from 'react'
import { createTheme } from '@mui/material'
import { Form, Output, ThemeSwitcher } from './components'

const App = () => {
  const [definitions, setDefinitions] = useState([])
  const storedTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(storedTheme)

  const themePalette = createTheme({
    palette: {
      mode: theme
    }
  })

  return (
    <div className={`${theme} app`}>
      <ThemeSwitcher setTheme={setTheme} theme={theme} themePalette={themePalette} />
      <h1 className="text-center">WORD BOOK</h1>
      <Form setDefinitions={setDefinitions} themePalette={themePalette} />
      <Output definitions={definitions} />
    </div>
  )
}

export default App
