import { useState } from 'react'
import { createTheme } from '@mui/material'
import { Form, Output, ThemeSwitcher } from './components'

const App = () => {
  const [definitions, setDefinitions] = useState([])
  const storedTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(storedTheme)
  const [appMode, setAppMode] = useState('online')

  const themePalette = createTheme({
    palette: {
      mode: theme
    }
  })

  return (
    <div className={`${theme} app`}>
      <ThemeSwitcher setTheme={setTheme} theme={theme} themePalette={themePalette} />
      <h1 className="text-center">{definitions?.word || 'WORD BOOK'}</h1>
      <Form
        setDefinitions={setDefinitions}
        themePalette={themePalette}
        setAppMode={setAppMode}
      />
      <Output definitions={definitions} appMode={appMode} />
    </div>
  )
}

export default App
