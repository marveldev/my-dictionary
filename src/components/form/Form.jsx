import { useState } from 'react'
import { TextField, ThemeProvider, Autocomplete, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Form = ({ setDefinitions, themePalette, setAppMode }) => {
  const languages = ['English(EN)', 'French(FR)', 'German(DE)', 'Spanish(ES)', 'Italian(IT)']
  const [selectedLanguage, setSelectedLanguage] = useState('English(EN)')
  const languageShortCode = selectedLanguage.slice(-3, -1)
  const [word, setWord] = useState('')

  const wordList = require('word-list-json')

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
    <ThemeProvider theme={themePalette}>
      <>
        <Autocomplete
          freeSolo
          options={languages.map((option) => option)}
          renderInput={params =>
            <div className="form d-flex m-auto">
              <TextField {...params} variant="filled" label="Search a Word" />
              <Button variant="contained" id="searchButton">
                <SearchIcon />
              </Button>
            </div>
          }
        />
      </>
    </ThemeProvider>
  )
}

export default Form
