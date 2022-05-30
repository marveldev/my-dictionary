import { useState } from 'react'
import { createTheme } from '@mui/material'
import { Form, Output, ThemeSwitcher } from './components'

const App = () => {
  const [definitions, setDefinitions] = useState([])
  const [appMode, setAppMode] = useState(localStorage.getItem('appMode' || 'online'))
  const [isLoading, setIsLoading] = useState(null)

  const storedTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(storedTheme)

  const themePalette = createTheme({
    palette: {
      mode: theme,
    },
  })

  useEffect(() => {
    if (navigator.onLine) {
      localStorage
    }
    return () => {
      second
    }
  }, [third])

  return (
    <div className={`${theme} app`}>
      <div className="top-column top-0 w-100 pb-4">
        <ThemeSwitcher setTheme={setTheme} theme={theme} themePalette={themePalette} />
        <h1 className="text-center">{definitions?.word || 'WORD BOOK'}</h1>
        <Form
          setDefinitions={setDefinitions}
          themePalette={themePalette}
          setAppMode={setAppMode}
          setIsLoading={setIsLoading}
        />
      </div>

      <Output definitions={definitions} appMode={appMode} isLoading={isLoading} />
    </div>
  )
}

export default App
