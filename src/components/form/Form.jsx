import { useState } from 'react'
import { MenuItem, TextField, ThemeProvider, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Form = ({ setDefinitions, themePalette }) => {
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
      const response = await fetch(url)
      const data = await response.json()
      setDefinitions(data[0])
    }
  }

  const SearchButton = () => (
    <IconButton>
      <SearchIcon />
    </IconButton>
  )

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
            InputProps={{endAdornment: <SearchButton />}}
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
