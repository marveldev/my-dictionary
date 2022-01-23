import { useState } from 'react'
import { MenuItem, TextField, ThemeProvider, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Form = ({ setDefinitions, themePalette, setAppMode }) => {
  const languages = ['English(EN)', 'French(FR)', 'German(DE)', 'Spanish(ES)', 'Italian(IT)']
  const [selectedLanguage, setSelectedLanguage] = useState('English(EN)')
  const languageShortCode = selectedLanguage.slice(-3, -1)
  const [word, setWord] = useState('')

  const changeLanguage = value => {
    setDefinitions([])
    setSelectedLanguage(value)
    setWord('')
  }

  const fetchSearchData = async event => {
    event.preventDefault()
    if (word.trim().length >= 1) {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/${languageShortCode}/${word}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        setAppMode('online')
        setDefinitions(data[0])
      } catch (error) {
        setAppMode('offline')
      }
    } else setDefinitions([])
  }

  return (
    <div className="form d-flex gap-3 text m-auto my-3">
      <ThemeProvider theme={themePalette}>
        <form
          className="flex-grow-1"
          onSubmit={event => fetchSearchData(event)}
        >
          <TextField
            label="Search a Word"
            variant="filled"
            value={word}
            onChange={event => setWord(event.target.value)}
            InputProps={{endAdornment:
              <IconButton onClick={fetchSearchData} aria-label="search">
                <SearchIcon />
              </IconButton>
            }}
            fullWidth
          />
        </form>

        <div>
          <TextField
            label="Language"
            value={selectedLanguage}
            variant="filled"
            onChange={event => changeLanguage(event.target.value)}
            fullWidth
            select
          >
            {languages.map(language => (
              <MenuItem key={language} value={language}>
                {language}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Form
